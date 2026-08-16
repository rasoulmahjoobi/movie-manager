import { Heart, Pencil, Star, Trash2 } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets.",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    image: "https://picsum.photos/80/120?1",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travel through space.",
    genre: "Adventure",
    year: 2014,
    rating: 8.6,
    image: "https://picsum.photos/80/120?2",
  },
];


function MovieCard(){

return(
    <>
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
          {movies.map((movie, index) => (
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

                    <p className="mt-1 max-w-xs text-sm text-gray-500">
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
                  {movie.rating}
                </div>
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-2">
                  <button className="rounded-md border p-2 hover:bg-red-50">
                    <Heart className="size-4" />
                  </button>

                  <button className="rounded-md border p-2 hover:bg-gray-100">
                    <Pencil className="size-4" />
                  </button>

                  <button className="rounded-md border p-2 hover:bg-red-50">
                    <Trash2 className="size-4 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>    
    </>
)

}
export default MovieCard