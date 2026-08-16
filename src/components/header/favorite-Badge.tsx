import { Heart } from "lucide-react";

function FavoriteBadge() {
  return (
    <>
      <div>
        <div className="flex gap-2 p-4 text-sm">
          <Heart className="fill-red-500 text-red-500 text-sm" />{" "}
          <span className="text-white">Favorite Movie (3)</span>
        </div>
      </div>
    </>
  );
}
export default FavoriteBadge;
