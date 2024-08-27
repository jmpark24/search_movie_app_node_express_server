import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app: Express = express();
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

app.post('/api/movie', async (req: Request, res: Response) => {
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
      return res.status(400).json({ Error: 'Invalid request' });
    }

    data = await response.json();

    if (data.Response === 'True') {
      res.json(data);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ Error: 'An error occurred while processing data' });
  }
});
