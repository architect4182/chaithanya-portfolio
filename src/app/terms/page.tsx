import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24 px-4 max-w-3xl mx-auto">
      <Link href="/" className="caption-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-8 inline-block">
        ← Back to portfolio
      </Link>
      <h1 className="heading-3 text-[var(--text-primary)] mb-6">
        Terms of Service
      </h1>
      <div className="space-y-4 body-4 text-[var(--text-secondary)]">
        <p>
          All project code samples, interactive demos, and written case studies presented on this site are authored by Chaithanya Pedhagali unless otherwise cited.
        </p>
        <p>
          Trademarks, client company names, and third-party technology brands mentioned belong to their respective copyright holders.
        </p>
      </div>
    </main>
  );
}
