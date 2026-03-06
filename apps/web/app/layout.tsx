import "./globals.css";
import Link from "next/link";
import AISidebar from "../components/AISidebar";

export const metadata = {
  title: "Isack AI School",
  description: "Learn coding with Isack AI School - interactive lessons, video tutorials, AI tutor, and AI assistant!"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
          <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Isack AI School
            </Link>
            <nav className="flex gap-4 text-sm text-neutral-300">
              <Link href="/courses">Courses</Link>
              <Link href="/practice">Practice</Link>
              <Link href="/exam">Exam</Link>
              <Link href="/isaac" className="text-blue-400 hover:text-blue-300">🤖 Isack AI</Link>
              <Link href="/earn">Earn</Link>
            </nav>
          </header>

          <main className="mx-auto max-w-6xl px-6 pb-16">{children}</main>

          <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-500">
            Elite MVP • Next.js + Monaco + Runner
          </footer>
        </div>

        <AISidebar />
      </body>
    </html>
  );
}
