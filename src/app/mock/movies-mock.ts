import { IMovieDetails } from '../models/movie-details.model';
import { IMovie } from '../models/movie.model';

export const moviesMock: IMovie[] = [
  {
    adult: false,
    backdrop_path: '/path/to/backdrop.jpg',
    genre_ids: [28, 12, 16],
    id: 1,
    original_language: 'en',
    original_title: 'Original Title 1',
    overview: 'This is a test overview 1.',
    popularity: 8.5,
    poster_path: '/path/to/poster.jpg',
    release_date: '2024-07-27',
    title: 'Test Movie 1',
    video: false,
    vote_average: 7.5,
    vote_count: 1000,
  },
  {
    adult: false,
    backdrop_path: '/path/to/backdrop.jpg',
    genre_ids: [28, 12, 16],
    id: 1,
    original_language: 'en',
    original_title: 'Original Title 2',
    overview: 'This is a test overview 2.',
    popularity: 8.5,
    poster_path: '/path/to/poster.jpg',
    release_date: '2024-07-27',
    title: 'Test Movie 2',
    video: false,
    vote_average: 7.5,
    vote_count: 1000,
  },
];

export const movieDetailsMock: IMovieDetails = {
  id: 1,
  title: 'Random Movie',
  release_date: '2023-07-29',
  overview: 'This is a random movie for testing purposes.',
  poster_path: '/randomPosterPath.jpg',
  backdrop_path: '/randomBackdropPath.jpg',
  vote_average: 8.5,
  vote_count: 1200,
  belongs_to_collection: {
    id: 10,
    name: 'Random Collection',
    poster_path: '/randomCollectionPoster.jpg',
    backdrop_path: '/randomCollectionBackdrop.jpg',
  },
  budget: 100000000,
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
  ],
  homepage: 'https://www.randommoviehomepage.com',
  imdb_id: 'tt1234567',
  origin_country: ['USA'],
  production_companies: [
    {
      id: 101,
      logo_path: '/randomCompanyLogo.jpg',
      name: 'Random Production Company',
      origin_country: 'USA',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  revenue: 500000000,
  runtime: 120,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'This is a random movie tagline.',
  adult: false,
  genre_ids: [],
  original_language: '',
  original_title: '',
  popularity: 0,
  video: false,
};
