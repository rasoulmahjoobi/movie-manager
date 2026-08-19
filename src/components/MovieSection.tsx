import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../reduxe/store";
import { setCurrentPage, setEditingMovie } from "../reduxe/movieSlice";

import useMovies from "../hooks/useMovies";

import ButtonAdd from "./button-add";
import Filter from "./Filter";
import Search from "./SearchBar";
import MovieModal from "./MovieModal";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Error from "./Error";
import MovieCard from "./MovieCard";

function MovieSection() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.movie.currentPage,
  );

  const { data, isLoading, isError } = useMovies(currentPage);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const handleAddClick = () => {
    dispatch(setEditingMovie(null));
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(setEditingMovie(null));
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between m-4">
        <div className="flex gap-3">
          <Search />
          <Filter />
        </div>

        <ButtonAdd onClick={handleAddClick} />
      </div>

      <div className="flex items-start gap-6 px-4">
        <div className="flex-1">
          <MovieCard
            movies={data || []}
            onEdit={() => setOpen(true)}
            currentPage={currentPage}
          />
          <div className="py-4">
            <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={(page) => dispatch(setCurrentPage(page))}
            />
          </div>
        </div>

        {open && <MovieModal onClose={handleClose} />}
      </div>
    </>
  );
}

export default MovieSection;
