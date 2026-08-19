import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMovie } from "../api/movieApi";


const useDeleteMovie = () =>{

     const queryClient = useQueryClient();

     return(

        useMutation({
    mutationFn: (id: string) => deleteMovie(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      toast.success("Movie deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete movie");
    },
  })
     )
}
export default useDeleteMovie