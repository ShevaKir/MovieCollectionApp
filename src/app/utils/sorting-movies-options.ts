export enum SortingMovies {
  None,
  PopularityDesc,
  PopularityAsc,
  RatingDesc,
  RatingAsc,
  ReleaseDateDesc,
  ReleaseDateAsc,
  Title,
}

export const sortingMoviesOptions = [
  { value: SortingMovies.None, label: 'None' },
  {
    value: SortingMovies.PopularityDesc,
    label: 'Popularity descending',
  },
  { value: SortingMovies.PopularityAsc, label: 'Popularity ascending' },
  { value: SortingMovies.RatingDesc, label: 'Rating descending' },
  { value: SortingMovies.RatingAsc, label: 'Rating ascending' },
  {
    value: SortingMovies.ReleaseDateDesc,
    label: 'Release date descending',
  },
  {
    value: SortingMovies.ReleaseDateAsc,
    label: 'Release date ascending',
  },
  { value: SortingMovies.Title, label: 'Title (a-z)' },
];
