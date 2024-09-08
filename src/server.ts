import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import localhost from './utils/getServerIp.js';
import https from 'https';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const HTTPS_PORT = process.env.HTTPS_PORT || 80;
// SSL 인증서 경로 (실제 서버의 인증서 파일 경로로 변경 필요)
const sslOptions = {
  key: fs.readFileSync(join(__dirname, '../certs/private.key')), // 개인 키 파일 경로
  cert: fs.readFileSync(join(__dirname, '../certs/certificate.crt')), // 인증서 파일 경로
  ca: fs.readFileSync(join(__dirname, '../certs/ca_bundle.crt')), // CA 인증서 파일 (선택 사항)
};

// Swagger 문서 로드
const swaggerDocument = YAML.load(join(__dirname, '../swagger.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

const YOUR_API_KEY = process.env.OMDB_API_KEY;

if (!YOUR_API_KEY) {
  console.error('OMDb API Key is not defined');
  process.exit(1);
}

https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
  console.log(`[server]: Secure server is running at https://${localhost()}:${HTTPS_PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
  });
});
app.post('/api/movie', async (req, res) => {
  const { title, page, id } = req.body;
  console.log(req.body);

  try {
    let response;
    let data: any;

    if (title) {
      response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(title)}&page=${page}&apikey=${YOUR_API_KEY}`
      );
    } else if (id) {
      response = await fetch(
        `https://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=${YOUR_API_KEY}`
      );
    } else {
      return res.status(400).json({ Error: '잘못된 요청' });
    }

    data = await response.json();

    if (data.Response === 'True') {
      res.json(data);
    } else {
      res.status(404).json({ Error: '영화가 검색되지 않았습니다.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ Error: '데이터를 처리하는 동안 오류가 발생했습니다.' });
  }
});
