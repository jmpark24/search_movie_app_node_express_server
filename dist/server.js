var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import dotenv from 'dotenv';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT;
const YOUR_API_KEY = process.env.OMDB_API_KEY;
if (!YOUR_API_KEY) {
    console.error('OMDb API Key is not defined');
    process.exit(1);
}
const sslOptions = {
    key: fs.readFileSync('/etc/ssl/private/mykey.key'),
    cert: fs.readFileSync('/etc/ssl/certs/mycert.crt'),
};
app.use(cors());
app.use(express.json());
const swaggerDocument = YAML.load(join(__dirname, '../swagger.yaml'));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`[server]: Secure server is running at https://${localhost()}:${PORT}`);
});
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString(),
    });
});
app.get('/searchMovies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.query.title;
    const page = req.query.page;
    try {
        const response = yield fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(title)}&page=${page}&apikey=${YOUR_API_KEY}`);
        const data = (yield response.json());
        if (data.Response === 'True') {
            res.status(200).json(data);
        }
        else {
            res.status(404).json({ Error: '검색 된 영화가 없습니다!' });
        }
    }
    catch (error) {
        res.status(500).json({ Error: '데이터를 처리하는 동안 오류가 발생했습니다.' });
    }
}));
app.get('/getMovieDetails', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    if (!id) {
        return res.status(404).json({ Error: 'id는 필수 파라미터입니다.' });
    }
    try {
        const response = yield fetch(`https://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=${YOUR_API_KEY}`);
        const data = (yield response.json());
        if (data.Response === 'True') {
            res.status(200).json(data);
        }
        else {
            res.status(404).json({ Error: '검색 된 영화가 없습니다!' });
        }
    }
    catch (error) {
        res.status(500).json({ Error: '데이터를 처리하는 동안 오류가 발생했습니다.' });
    }
}));
