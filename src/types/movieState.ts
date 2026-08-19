import type { Movie } from "./movie";

export interface MovieState {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  search: string;
  filter: string;
  loading: boolean;
  error: string | null;
   favorites: string[];
  editingMovie: Movie | null;
}