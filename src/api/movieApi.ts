import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "http://localhost:3000/movies";

export const getMovies = async (
  page: number,
  search: string = "",
  filter: string = "",
) => {
  const response = await axios.get(API_URL, {
    params: {
      _page: page,
      _per_page: 5,
      ...(search && { "title:contains": search }),
      ...(filter && { genre: filter }),
    },
  });

  return response.data.data;
};

export const addMovie = async (movie: Omit<Movie, "id">) => {
  const response = await axios.post(API_URL, movie);
  return response.data;
};

export const updateMovie = async (movie: Movie) => {
  const response = await axios.put(`${API_URL}/${movie.id}`, movie);
  return response.data;
};

export const deleteMovie = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
