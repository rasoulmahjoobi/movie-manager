import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../reduxe/store";

function FavoriteBadge() {
  const favorites = useSelector(
    (state: RootState) => state.movie.favorites
  );

  return (
    <div className="flex gap-2 p-4 text-sm">
      <Heart className="fill-red-500 text-red-500 text-sm" />{" "}
      <span className="text-white">
        Favorite Movie ({favorites.length})
      </span>
    </div>
  );
}

export default FavoriteBadge;