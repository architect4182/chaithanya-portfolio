"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0b0406", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          style={{ padding: "0.75rem 1.5rem", borderRadius: "8px", background: "#ff2d46", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600 }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
