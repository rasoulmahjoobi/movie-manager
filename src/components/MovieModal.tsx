import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../reduxe/store";
import { setEditingMovie } from "../reduxe/movieSlice";
import useAddMovie from "../hooks/useAddMovie";
import useUpdateMovie from "../hooks/useUpdateMovie";

type IProps = {
  onClose: () => void;
};

const initialForm = {
  title: "",
  image: "",
  genre: "",
  year: "",
  rating: "",
  description: "",
};

function MovieModal({ onClose }: IProps) {
  const dispatch = useDispatch();
  const editingMovie = useSelector(
    (state: RootState) => state.movie.editingMovie
  );

  const [form, setForm] = useState(initialForm);

  const { mutate: addMovie, isPending: isAdding } = useAddMovie();
  const { mutate: updateMovie, isPending: isUpdating } = useUpdateMovie();

  const isEditMode = Boolean(editingMovie);

  useEffect(() => {
    if (editingMovie) {
      setForm({
        title: editingMovie.title,
        image: editingMovie.image,
        genre: editingMovie.genre,
        year: String(editingMovie.year),
        rating: String(editingMovie.rating),
        description: editingMovie.description,
      });
    } else {
      setForm(initialForm);
    }
  }, [editingMovie]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(setEditingMovie(null));
    onClose();
  };

  const handleSubmit = () => {
    const payload = {
      title: form.title,
      image: form.image,
      genre: form.genre,
      year: Number(form.year),
      rating: Number(form.rating),
      description: form.description,
    };

    if (isEditMode && editingMovie) {
      updateMovie(
        { ...payload, id: editingMovie.id },
        { onSuccess: handleClose }
      );
    } else {
      addMovie(payload, { onSuccess: handleClose });
    }
  };

  return (
    <div className="w-96 rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {isEditMode ? "Edit Movie" : "Add Movie"}
        </h2>

        <button onClick={handleClose}>
          <X className="size-5" />
        </button>
      </div>

      <div className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Movie Title"
          className="w-full rounded-md border p-3"
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Poster URL"
          className="w-full rounded-md border p-3"
        />

        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="w-full rounded-md border p-3"
        />

        <input
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
          placeholder="Year"
          className="w-full rounded-md border p-3"
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="w-full rounded-md border p-3"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="h-28 w-full rounded-md border p-3"
        />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button onClick={handleClose} className="rounded-md border px-4 py-2">
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={isAdding || isUpdating}
          className="rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isEditMode ? "Edit Movie" : "Add Movie"}
        </button>
      </div>
    </div>
  );
}

export default MovieModal;