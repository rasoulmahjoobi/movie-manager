import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMovie } from "../api/movieApi";
import type { Movie } from "../types/movie";
import toast from "react-hot-toast";

const useAddMovie=()=>{

     const queryClient = useQueryClient();

     return(
useMutation({
    mutationFn:(movie: Omit<Movie,"id">)=>addMovie(movie),
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['movies']})
        toast.success("Movie added successfully");
    },

      onError: () => {
      toast.error("Failed to add movie");
    },
})

     )

}
export default useAddMovie