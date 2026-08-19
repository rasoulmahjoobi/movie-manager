import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {/* Previous */}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-md border disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft className="size-4" />
      </button>

      {/* Page Numbers */}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-9 w-9 items-center justify-center rounded-md border transition
            ${
              currentPage === page
                ? "bg-indigo-600 text-white border-indigo-600"
                : "hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-md border disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}

export default Pagination;