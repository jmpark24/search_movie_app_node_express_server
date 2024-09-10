import express, { Request, Response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import localhost from './utils/getServerIp.js';
import { MovieDetails, searchMoviesType } from './types/omdb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 8080;
const YOUR_API_KEY = process.env.OMDB_API_KEY || '96b42200';

if (!YOUR_API_KEY) {
  console.error('OMDb API Key is not defined');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

const swaggerDocument = YAML.load(join(__dirname, '../swagger.yaml'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://${localhost()}:${PORT}`);
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
  });
});

app.get('/searchMovies', async (req: Request, res: Response) => {
  const title: string | undefined = req.query.title as string;
  const page: string | undefined = req.query.page as string;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(title)}&page=${page}&apikey=${YOUR_API_KEY}`
    );
    const data = (await response.json()) as searchMoviesType;
    if (data.Response === 'True') {
      res.status(200).json(data);
    } else {
      res.status(404).json({ Error: '검색 된 영화가 없습니다!' });
    }
  } catch (error) {
    res.status(500).json({ Error: '데이터를 처리하는 동안 오류가 발생했습니다.' });
  }
});

// 영화 상세 정보 API
app.get('/getMovieDetails', async (req: Request, res: Response) => {
  const id: string | undefined = req.query.id as string;

  if (!id) {
    return res.status(404).json({ Error: 'id는 필수 파라미터입니다.' });
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=${YOUR_API_KEY}`
    );
    const data = (await response.json()) as MovieDetails;

    if (data.Response === 'True') {
      res.status(200).json(data);
    } else {
      res.status(404).json({ Error: '검색 된 영화가 없습니다!' });
    }
  } catch (error) {
    res.status(500).json({ Error: '데이터를 처리하는 동안 오류가 발생했습니다.' });
  }
});
