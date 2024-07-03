import { IMovie } from "./movie.model";

export interface IMovieResponse {
    page: number,
    results: IMovie[]
}