import { useMutation } from '@tanstack/react-query';
import {  useQueryClient } from '@tanstack/react-query';
import { updateMovie } from '../api/movieApi';
import type { Movie } from '../types/movie';
import toast from 'react-hot-toast';


const useUpdateMovie=()=>{

    const queryClient=useQueryClient();

    return(
 useMutation({

  mutationFn:(movie:Movie)=>updateMovie(movie),
  onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:['movies']})
     toast.success("Movie updated successfully");
  },
  onError: () => {
      toast.error("Failed to update movie");
    },
})

    )
}
export default useUpdateMovie