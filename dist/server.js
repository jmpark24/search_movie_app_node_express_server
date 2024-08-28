var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import localhost from './utils/getServerIp.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 8080;
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
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://${localhost()}:${PORT}`);
});
app.post('/api/movie', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, page, id } = req.body;
    console.log(req.body);
    try {
        let response;
        let data;
        if (title) {
            response = yield fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(title)}&page=${page}&apikey=${YOUR_API_KEY}`);
        }
        else if (id) {
            response = yield fetch(`https://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=${YOUR_API_KEY}`);
        }
        else {
            return res.status(400).json({ Error: '잘못된 요청' });
        }
        data = yield response.json();
        if (data.Response === 'True') {
            res.json(data);
        }
        else {
            res.status(404).json({ Error: '영화가 검색되지 않았습니다.' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ Error: '데이터를 처리하는 동안 오류가 발생했습니다.' });
    }
}));
