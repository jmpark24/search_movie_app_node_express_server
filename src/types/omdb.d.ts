// src/types/omdb.d.ts
export interface OmdbResponse {
  Response: string;
  Error?: string;
  Search?: Array<{ imdbID: string; Title: string; Poster: string }>;
  totalResults?: string;
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: Array<{ Source: string; Value: string }>;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}
