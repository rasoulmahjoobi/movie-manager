import { X } from "lucide-react";

type Props = {
  onClose: () => void;
};

function MovieModal({ onClose }: Props) {
  return (
    <div className="w-[360px] rounded-xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Add Movie
        </h2>

        <button onClick={onClose}>
          <X className="size-5" />
        </button>
      </div>

      <div className="space-y-4">

        <input
          placeholder="Movie Title"
          className="w-full rounded-md border p-3"
        />

        <input
          placeholder="Poster URL"
          className="w-full rounded-md border p-3"
        />

        <input
          placeholder="Genre"
          className="w-full rounded-md border p-3"
        />

        <input
          placeholder="Year"
          className="w-full rounded-md border p-3"
        />

        <textarea
          placeholder="Description"
          className="h-28 w-full rounded-md border p-3"
        />

      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="rounded-md border px-4 py-2"
        >
          Cancel
        </button>

        <button className="rounded-md bg-indigo-600 px-4 py-2 text-white">
          Add Movie
        </button>
      </div>

    </div>
  );
}

export default MovieModal;