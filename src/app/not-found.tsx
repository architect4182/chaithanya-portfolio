import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "#0b0406", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>404 - Page Not Found</h2>
      <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>The page you are looking for does not exist.</p>
      <Link
        href="/"
        style={{ padding: "0.75rem 1.5rem", borderRadius: "8px", background: "#ff2d46", color: "#fff", textDecoration: "none", fontWeight: 600 }}
      >
        Return Home
      </Link>
    </div>
  );
}
