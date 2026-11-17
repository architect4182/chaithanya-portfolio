import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md mx-auto">
        <span className="caption-3 font-mono-numbers text-[var(--text-muted)] mb-2 block">
          Error 404
        </span>
        <h1 className="heading-3 text-[var(--text-primary)] mb-4">
          Page not found
        </h1>
        <p className="body-4 text-[var(--text-secondary)] mb-8">
          The requested page does not exist or has been moved to another location.
        </p>
        <Link
          href="/"
          className="button-md"
          style={{
            backgroundColor: "var(--accent-button-bg)",
            color: "var(--accent-button-text)",
          }}
        >
          Return to portfolio
        </Link>
      </div>
    </main>
  );
}
