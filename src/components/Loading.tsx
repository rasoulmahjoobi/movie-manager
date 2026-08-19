function Loading() {
  return (
    <div className="flex h-80 items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>

        <p className="text-sm text-gray-500">
          Loading movies...
        </p>
      </div>
    </div>
  );
}

export default Loading;