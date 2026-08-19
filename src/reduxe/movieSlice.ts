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

     toggleFavorite(state, action: PayloadAction<string>){
const id =action.payload
if(state.favorites.includes(id)){
state.favorites=state.favorites.filter((fav)=>fav!==id)
}else {
        state.favorites.push(id);
      }

     },

      setEditingMovie(state, action: PayloadAction<Movie | null>) {
      state.editingMovie = action.payload;
    },



  },
});

export const { setCurrentPage ,toggleFavorite,setEditingMovie } = movieSlice.actions;

export default movieSlice.reducer;