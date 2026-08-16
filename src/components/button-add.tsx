import { Plus } from "lucide-react";

type ButtonAddProps = {
  onClick: () => void;
};

function ButtonAdd({ onClick }: ButtonAddProps) {
  return (
    <div className="p-4">
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-1 whitespace-nowrap bg-indigo-500 text-[12px] w-22 h-8 rounded-sm text-white"
      >
        <Plus className="size-3" />
        Add Movie
      </button>
    </div>
  );
}

export default ButtonAdd;