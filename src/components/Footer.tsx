export default function Footer() {
  return (
    <footer className="footer" style={{ paddingBottom: "120px", textAlign: "center", width: "100%" }}>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
        © {new Date().getFullYear()} Chaithanya Reddy Pedhagali. All rights reserved.
      </p>
    </footer>
  );
}
