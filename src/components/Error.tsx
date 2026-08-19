type Props = {
  message?: string;
};

function Error({ message = "Something went wrong." }: Props) {
  return (
    <div className="flex h-80 items-center justify-center">
      <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-center">
        <h2 className="mb-2 text-lg font-semibold text-red-600">
          Error
        </h2>

        <p className="text-gray-600">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Error;