import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieState } from "../types/movieState";
import type { Movie } from "../types/movie";

const initialState: MovieState = {
  movies: [],
  currentPage: 1,
  totalPages: 1,
  search: "",
  filter: "",
  loading: false,
  error: null,
  favorites: [],
  editingMovie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((fid) => fid !== id);
      } else {
        state.favorites.push(id);
      }
    },
    setEditingMovie(state, action: PayloadAction<Movie | null>) {
      state.editingMovie = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.currentPage = 1;
    },
  },
});

export const {
  setCurrentPage,
  toggleFavorite,
  setEditingMovie,
  setSearch,
  setFilter,
} = movieSlice.actions;

export default movieSlice.reducer;
