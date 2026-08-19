import { useQuery } from "@tanstack/react-query";
import {getMovies} from "../api/movieApi";

const useMovies = (page: number) => {
  return useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies(page),
  });
};
export default useMovies