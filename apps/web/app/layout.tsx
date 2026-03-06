import "./globals.css";
import Link from "next/link";
import AISidebar from "../components/AISidebar";

export const metadata = {
  title: "Isack AI School | Learn to Code with AI",
  description: "Master programming with interactive lessons, 200+ video tutorials, AI tutor, and AI assistant. Start learning HTML, CSS, JavaScript, Python, React, and more!",
  keywords: "programming, coding, learn to code, AI, tutorials, web development, JavaScript, Python, React, HTML, CSS",
  authors: [{ name: "Isack AI" }],
  openGraph: {
    title: "Isack AI School | Learn to Code with AI",
    description: "Master programming with interactive lessons, 200+ video tutorials, AI tutor, and AI assistant.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
          <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between border-b border-neutral-800">
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Isack AI School
              </span>
            </Link>
            <nav className="flex gap-6 text-sm text-neutral-300">
              <Link href="/courses" className="hover:text-white transition">Courses</Link>
              <Link href="/practice" className="hover:text-white transition">Practice</Link>
              <Link href="/exam" className="hover:text-white transition">Exam</Link>
              <Link href="/isaac" className="text-purple-400 hover:text-purple-300 transition">🤖 AI Tutor</Link>
              <Link href="/earn" className="text-green-400 hover:text-green-300 transition">💰 Earn</Link>
            </nav>
          </header>

          <main className="mx-auto max-w-6xl px-6 pb-16">{children}</main>

          <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Isack AI School</span>
                <span className="text-neutral-600">•</span>
                <span>Built with Next.js + Monaco Editor</span>
              </div>
              <div className="flex gap-4 text-neutral-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
                <a href="#" className="hover:text-white transition">About</a>
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-neutral-600">
              © 2024 Isack AI School. All rights reserved. Learn to code, build projects, get paid.
            </p>
          </footer>
        </div>

        <AISidebar />
      </body>
    </html>
  );
}
