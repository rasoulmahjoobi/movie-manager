import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMovies } from "../api/movieApi";
import type { RootState } from "../reduxe/store";

const useMovies = (page: number) => {
  const search = useSelector((state: RootState) => state.movie.search);
  const filter = useSelector((state: RootState) => state.movie.filter);

  return useQuery({
    queryKey: ["movies", page, search, filter],
    queryFn: () => getMovies(page, search, filter),
    placeholderData: keepPreviousData,
  });
};

export default useMovies;
