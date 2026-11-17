import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { ThemeProvider } from "../components/design-system/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaithanya Pedhagali — Full Stack Engineer",
  description: "Enterprise software engineer with 4 years building scalable web architectures and data systems for enterprise teams.",
  keywords: ["Chaithanya Pedhagali", "Full Stack Engineer", "React", "Next.js", "TypeScript", "Java", "Spring Boot", "Design Engineer"],
  authors: [{ name: "Chaithanya Pedhagali" }],
  openGraph: {
    title: "Chaithanya Pedhagali — Full Stack Engineer",
    description: "Enterprise software engineer with 4 years building scalable web architectures and data systems for enterprise teams.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`} data-theme="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
