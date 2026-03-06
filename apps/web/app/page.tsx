import Link from "next/link";

export default function Home() {
  return (
    <section className="mt-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight relative z-10">
          Learn to code. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Build projects.</span> Get paid.
        </h1>
        <p className="mt-4 text-neutral-300 text-lg max-w-2xl relative z-10">
          A comprehensive coding platform with interactive lessons, video tutorials, Isack AI tutor, and Isack AI assistant!
        </p>
        <div className="mt-6 flex gap-3 flex-wrap relative z-10">
          <Link className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 transition flex items-center gap-2" href="/courses">
            📚 Browse All Courses
          </Link>
          <Link className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:opacity-90 transition flex items-center gap-2" href="/isaac">
            🤖 Ask Isack AI
          </Link>
          <Link className="px-6 py-3 rounded-2xl bg-neutral-700 font-semibold hover:bg-neutral-600 transition flex items-center gap-2" href="/earn">
            💰 Earn Roadmap
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Lessons", value: "50+", icon: "📚" },
          { label: "Topics", value: "24+", icon: "🎯" },
          { label: "Isack AI Features", value: "3", icon: "🤖" },
          { label: "Video Tutorials", value: "30+", icon: "🎬" },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">📚</div>
            <div className="text-lg font-semibold">Interactive Lessons</div>
          </div>
          <p className="text-neutral-400">Learn with hands-on code examples. Edit and run code directly in your browser with our Monaco Editor.</p>
        </div>
        <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">🎬</div>
            <div className="text-lg font-semibold">Video Tutorials</div>
          </div>
          <p className="text-neutral-400">Watch expert-led video tutorials for every lesson to understand concepts better.</p>
        </div>
        <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">🤖</div>
            <div className="text-lg font-semibold">Isack AI Assistant</div>
          </div>
          <p className="text-neutral-400">Ask any question about programming and get instant answers from our Isack AI assistant.</p>
        </div>
        <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-600 flex items-center justify-center">💰</div>
            <div className="text-lg font-semibold">Earn Roadmap</div>
          </div>
          <p className="text-neutral-400">Get personalized guidance on how to monetize your coding skills and build a career.</p>
        </div>
      </div>

      {/* Language Grid */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Programming Languages & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { name: "HTML", color: "bg-orange-500", count: 8 },
            { name: "CSS", color: "bg-blue-500", count: 5 },
            { name: "JavaScript", color: "bg-yellow-500", count: 10 },
            { name: "Python", color: "bg-green-500", count: 11 },
            { name: "TypeScript", color: "bg-blue-600", count: 3 },
            { name: "React", color: "bg-cyan-400", count: 3 },
            { name: "Node.js", color: "bg-green-600", count: 3 },
            { name: "Django", color: "bg-green-700", count: 3 },
            { name: "MySQL", color: "bg-orange-600", count: 3 },
            { name: "MongoDB", color: "bg-green-500", count: 3 },
            { name: "PostgreSQL", color: "bg-blue-800", count: 3 },
            { name: "Bootstrap", color: "bg-purple-500", count: 3 },
            { name: "C", color: "bg-blue-700", count: 3 },
            { name: "C++", color: "bg-blue-600", count: 3 },
            { name: "C#", color: "bg-purple-700", count: 3 },
            { name: "Git", color: "bg-orange-600", count: 3 },
            { name: "NumPy", color: "bg-blue-500", count: 3 },
            { name: "Pandas", color: "bg-green-600", count: 3 },
            { name: "Angular", color: "bg-red-600", count: 3 },
            { name: "jQuery", color: "bg-blue-400", count: 2 },
            { name: "XML", color: "bg-orange-500", count: 2 },
            { name: "Excel", color: "bg-green-500", count: 2 },
            { name: "DSA", color: "bg-yellow-600", count: 3 },
            { name: "AngularJS", color: "bg-red-500", count: 2 },
          ].map((lang) => (
            <Link
              key={lang.name}
              href={`/courses?filter=${lang.name.toLowerCase()}`}
              className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800 transition flex items-center gap-3 group"
            >
              <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
              <div className="flex-1">
                <div className="font-semibold group-hover:text-blue-400 transition">{lang.name}</div>
                <div className="text-xs text-neutral-500">{lang.count} lessons</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <Link href="/practice" className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-blue-500 transition group">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-xl font-semibold group-hover:text-blue-400 transition">Practice</div>
          <p className="mt-2 text-neutral-400 text-sm">Practice with interactive coding exercises</p>
        </Link>
        <Link href="/isaac" className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-purple-500 transition group">
          <div className="text-2xl mb-2">🤖</div>
          <div className="text-xl font-semibold group-hover:text-purple-400 transition">Isack AI</div>
          <p className="mt-2 text-neutral-400 text-sm">Ask any programming question</p>
        </Link>
        <Link href="/earn" className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-green-500 transition group">
          <div className="text-2xl mb-2">💰</div>
          <div className="text-xl font-semibold group-hover:text-green-400 transition">Earn</div>
          <p className="mt-2 text-neutral-400 text-sm">Roadmap to earning with coding skills</p>
        </Link>
      </div>
    </section>
  );
}
