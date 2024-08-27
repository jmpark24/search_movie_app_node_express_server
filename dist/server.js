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
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
const YOUR_API_KEY = process.env.OMDB_API_KEY;
if (!YOUR_API_KEY) {
    console.error('API keys, project ID, or credentials file path are not defined');
    process.exit(1);
}
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
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
            return res.status(400).json({ Error: 'Invalid request' });
        }
        data = yield response.json();
        if (data.Response === 'True') {
            res.json(data);
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ Error: 'An error occurred while processing data' });
    }
}));
