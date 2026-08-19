import { Heart, Pencil, Star, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { Movie } from "../types/movie";
import type { RootState } from "../reduxe/store";
import { toggleFavorite, setEditingMovie } from "../reduxe/movieSlice";
import useDeleteMovie from "../hooks/useDeleteMovie";

type Props = {
  movies: Movie[];
  onEdit: () => void;
};

function MovieCard({ movies, onEdit }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.movie.favorites);
  const { mutate: deleteMovie } = useDeleteMovie();

  const handleEdit = (movie: Movie) => {
    dispatch(setEditingMovie(movie));
    onEdit();
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      deleteMovie(id);
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-4 text-left">#</th>
            <th className="px-5 py-4 text-left">Movie</th>
            <th className="px-5 py-4 text-left">Genre</th>
            <th className="px-5 py-4 text-left">Year</th>
            <th className="px-5 py-4 text-left">Rating</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie, index) => {
            const isFavorite = favorites.includes(movie.id);

            return (
              <tr key={movie.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-4">{index + 1}</td>

                <td className="px-5 py-4">
                  <div className="flex gap-4">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="h-20 w-14 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{movie.title}</h3>
                      <p className="mt-1 max-w-xs text-sm text-gray-500 line-clamp-2">
                        {movie.description}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">{movie.genre}</td>
                <td className="px-5 py-4">{movie.year}</td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span>{movie.rating}</span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => dispatch(toggleFavorite(movie.id))}
                      className="rounded-md border p-2 hover:bg-red-50"
                    >
                      <Heart
                        className={`size-4 text-red-500 ${
                          isFavorite ? "fill-red-500" : ""
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => handleEdit(movie)}
                      className="rounded-md border p-2 hover:bg-gray-100"
                    >
                      <Pencil className="size-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="rounded-md border p-2 hover:bg-red-50"
                    >
                      <Trash2 className="size-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MovieCard;