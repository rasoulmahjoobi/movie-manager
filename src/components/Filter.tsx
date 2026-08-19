import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../reduxe/store";
import { setFilter } from "../reduxe/movieSlice";

const genres = [
  "Sci-Fi",
  "Action",
  "Drama",
  "Romance",
  "Fantasy",
  "Crime",
  "Thriller",
  "Animation",
  "Mystery",
  "Biography",
  "Adventure",
];

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.movie.filter);

  return (
    <div>
      <select
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="border border-gray-400 w-20 h-6 text-[10px] rounded-sm"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
