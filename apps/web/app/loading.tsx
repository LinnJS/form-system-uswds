export default function Loading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 inline-block size-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" />
        <p className="text-lg text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}