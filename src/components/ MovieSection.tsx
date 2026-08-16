import { useState } from "react";

import ButtonAdd from "./button-add";
import Filter from "./Filter";
import Search from "./SearchBar";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

function MovieSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between m-4">
        <div className="flex gap-3">
          <Search />
          <Filter />
        </div>

        <ButtonAdd onClick={() => setOpen(true)} />
      </div>

      <div className="flex items-start gap-6 px-4">
        <div className="flex-1">
          <MovieCard />
        </div>

        {open && (
          <MovieModal onClose={() => setOpen(false)} />
        )}
      </div>
    </>
  );
}

export default MovieSection;