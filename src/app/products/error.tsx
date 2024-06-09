'use client';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error,
  reset: () => void;
}) {
  return (
    <>
      <div>{error.message}</div>
      <div>
        <button onClick={reset}>Try again</button>
      </div>
    </>
  );
}
