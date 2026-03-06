"use client";

import { useState } from "react";
import Link from "next/link";
import { lessons, searchLessons, type Language } from "../../lib/lessons";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Language | "all">("all");

  const filteredLessons = search
    ? searchLessons(search)
    : lessons;

  const displayedLessons = filter === "all"
    ? filteredLessons
    : filteredLessons.filter(l => l.language === filter);

  const grouped = displayedLessons.reduce<Record<string, typeof displayedLessons>>((acc, l) => {
    acc[l.language] = acc[l.language] || [];
    acc[l.language].push(l);
    return acc;
  }, {} as Record<string, typeof displayedLessons>);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">All Courses</h2>
      <p className="mt-2 text-neutral-300 text-sm">Learn programming with interactive lessons. Click any topic to start!</p>

      {/* Search and Filter */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search lessons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 outline-none focus:border-neutral-600"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as Language | "all")}
          className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 outline-none focus:border-neutral-600"
        >
          <option value="all">All Languages</option>
          <optgroup label="Web">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
          </optgroup>
          <optgroup label="Frontend Frameworks">
            <option value="react">React</option>
            <option value="jquery">jQuery</option>
            <option value="bootstrap">Bootstrap</option>
          </optgroup>
          <optgroup label="Backend">
            <option value="python">Python</option>
            <option value="php">PHP</option>
            <option value="nodejs">Node.js</option>
            <option value="go">Go</option>
            <option value="ruby">Ruby</option>
            <option value="java">Java</option>
          </optgroup>
          <optgroup label="Python Frameworks">
            <option value="django">Django</option>
            <option value="flask">Flask</option>
          </optgroup>
          <optgroup label="Databases">
            <option value="mysql">MySQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="mongodb">MongoDB</option>
          </optgroup>
          <optgroup label="Systems">
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="rust">Rust</option>
          </optgroup>
          <optgroup label="DevOps">
            <option value="docker">Docker</option>
            <option value="git">Git</option>
            <option value="linux">Linux</option>
            <option value="aws">AWS</option>
          </optgroup>
          <optgroup label="AI & Data Science">
            <option value="ai">AI/ML</option>
            <option value="numpy">NumPy</option>
            <option value="pandas">Pandas</option>
          </optgroup>
        </select>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-neutral-400">
        Showing {displayedLessons.length} lessons
      </div>

      {/* Course Grid */}
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(grouped).map(([lang, list]) => (
          <div key={lang} className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition">
            <div className="text-lg font-semibold capitalize flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${
                lang === "html" ? "bg-orange-500" :
                lang === "css" ? "bg-blue-500" :
                lang === "javascript" ? "bg-yellow-500" :
                lang === "python" ? "bg-green-500" :
                lang === "swift" ? "bg-orange-400" :
                lang === "kotlin" ? "bg-purple-500" :
                lang === "cpp" ? "bg-blue-700" :
                lang === "c" ? "bg-gray-600" :
                lang === "rust" ? "bg-orange-700" :
                lang === "r" ? "bg-gray-400" :
                lang === "sql" ? "bg-blue-400" :
                lang === "php" ? "bg-purple-600" :
                lang === "react" ? "bg-cyan-400" :
                lang === "nodejs" ? "bg-green-600" :
                lang === "typescript" ? "bg-blue-600" :
                lang === "go" ? "bg-cyan-500" :
                lang === "docker" ? "bg-blue-400" :
                lang === "git" ? "bg-orange-600" :
                lang === "linux" ? "bg-yellow-700" :
                lang === "aws" ? "bg-yellow-600" :
                lang === "jquery" ? "bg-blue-300" :
                lang === "bootstrap" ? "bg-purple-400" :
                lang === "json" ? "bg-yellow-400" :
                lang === "xml" ? "bg-orange-400" :
                lang === "django" ? "bg-green-700" :
                lang === "flask" ? "bg-gray-500" :
                lang === "mysql" ? "bg-orange-600" :
                lang === "postgresql" ? "bg-blue-800" :
                lang === "mongodb" ? "bg-green-500" :
                lang === "ruby" ? "bg-red-600" :
                lang === "java" ? "bg-red-500" :
                lang === "ai" ? "bg-pink-500" :
                "bg-neutral-500"
              }`}></span>
              {lang}
              <span className="text-xs text-neutral-500 ml-auto">{list.length}</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300 max-h-48 overflow-y-auto">
              {list.map((l) => (
                <li key={l.id}>
                  <Link className="underline underline-offset-4 hover:text-white block" href={`/lesson/${l.id}`}>
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {displayedLessons.length === 0 && (
        <div className="mt-8 text-center text-neutral-400">
          No lessons found. Try a different search or filter.
        </div>
      )}

      {/* W3Schools Coverage Info */}
      <div className="mt-8 p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
        <h3 className="text-lg font-semibold">📚 Topics Covered</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-neutral-400">
          <div>
            <strong className="text-neutral-200">Web Development</strong>
            <p>HTML, CSS, JavaScript, TypeScript, React, jQuery, Bootstrap</p>
          </div>
          <div>
            <strong className="text-neutral-200">Backend & Scripting</strong>
            <p>Python, PHP, Node.js, Go</p>
          </div>
          <div>
            <strong className="text-neutral-200">Data & Systems</strong>
            <p>SQL, R, C++, Rust, Swift, Kotlin</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          💡 Tip: Ask Isack AI about any topic for detailed explanations and code examples!
        </p>
      </div>
    </div>
  );
}
