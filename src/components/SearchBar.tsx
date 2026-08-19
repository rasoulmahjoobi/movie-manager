import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../reduxe/movieSlice";
import { debounce } from "../utils/debounce";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const debouncedSetSearch = useRef(
    debounce((val: string) => {
      dispatch(setSearch(val));
    }, 500),
  ).current;

  useEffect(() => {
    debouncedSetSearch(value);
  }, [value, debouncedSetSearch]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="🔍 Search movie..."
        className="border border-gray-400 w-56 text-[10px] p-1"
      />
    </div>
  );
}

export default Search;
