import Link from "next/link";
import { lessons } from "../../lib/lessons";

export default function Practice() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Practice</h2>
      <p className="mt-2 text-neutral-300 text-sm">
        Pick a lesson and ask the Isack AI Tutor for exercises (Exercise button).
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {lessons.map((l) => (
          <Link
            key={l.id}
            href={`/lesson/${l.id}`}
            className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition"
          >
            <div className="font-semibold">{l.title}</div>
            <div className="text-xs text-neutral-500 capitalize">{l.language}</div>
            <div className="mt-2 text-sm text-neutral-300">{l.summary}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
