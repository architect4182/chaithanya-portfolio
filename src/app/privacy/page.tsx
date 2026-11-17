import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24 px-4 max-w-3xl mx-auto">
      <Link href="/" className="caption-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-8 inline-block">
        ← Back to portfolio
      </Link>
      <h1 className="heading-3 text-[var(--text-primary)] mb-6">
        Privacy Policy
      </h1>
      <div className="space-y-4 body-4 text-[var(--text-secondary)]">
        <p>
          This personal portfolio website does not collect personal data, track behavioral cookies, or monetize visitor information.
        </p>
        <p>
          Any communications sent via email are treated with professional confidentiality and used solely for employment or contracting inquiries.
        </p>
      </div>
    </main>
  );
}
