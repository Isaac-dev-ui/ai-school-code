import Link from "next/link";
import { lessons, listLanguages, Lesson } from "../lib/lessons";

export default function Home() {
  // Calculate dynamic stats
  const totalLessons = lessons.length;
  const totalLanguages = listLanguages().length;
  const lessonsWithVideos = lessons.filter((l: Lesson) => l.videoUrl).length;
  
  // Get unique technologies for the grid
  const techs = [
    { name: "HTML", color: "bg-orange-500", count: lessons.filter((l: Lesson) => l.language === "html").length },
    { name: "CSS", color: "bg-blue-500", count: lessons.filter((l: Lesson) => l.language === "css").length },
    { name: "JavaScript", color: "bg-yellow-500", count: lessons.filter((l: Lesson) => l.language === "javascript").length },
    { name: "Python", color: "bg-green-500", count: lessons.filter((l: Lesson) => l.language === "python").length },
    { name: "TypeScript", color: "bg-blue-600", count: lessons.filter((l: Lesson) => l.language === "typescript").length },
    { name: "React", color: "bg-cyan-400", count: lessons.filter((l: Lesson) => l.language === "react").length },
    { name: "Node.js", color: "bg-green-600", count: lessons.filter((l: Lesson) => l.language === "nodejs").length },
    { name: "Django", color: "bg-green-700", count: lessons.filter((l: Lesson) => l.language === "django").length },
    { name: "Flask", color: "bg-gray-500", count: lessons.filter((l: Lesson) => l.language === "flask").length },
    { name: "MySQL", color: "bg-orange-600", count: lessons.filter((l: Lesson) => l.language === "mysql").length },
    { name: "MongoDB", color: "bg-green-500", count: lessons.filter((l: Lesson) => l.language === "mongodb").length },
    { name: "PostgreSQL", color: "bg-blue-800", count: lessons.filter((l: Lesson) => l.language === "postgresql").length },
    { name: "Bootstrap", color: "bg-purple-500", count: lessons.filter((l: Lesson) => l.language === "bootstrap").length },
    { name: "jQuery", color: "bg-blue-400", count: lessons.filter((l: Lesson) => l.language === "jquery").length },
    { name: "Java", color: "bg-red-500", count: lessons.filter((l: Lesson) => l.language === "java").length },
    { name: "PHP", color: "bg-purple-600", count: lessons.filter((l: Lesson) => l.language === "php").length },
    { name: "C", color: "bg-blue-700", count: lessons.filter((l: Lesson) => l.language === "c").length },
    { name: "C++", color: "bg-blue-600", count: lessons.filter((l: Lesson) => l.language === "cpp").length },
    { name: "Ruby", color: "bg-red-600", count: lessons.filter((l: Lesson) => l.language === "ruby").length },
    { name: "Go", color: "bg-cyan-500", count: lessons.filter((l: Lesson) => l.language === "go").length },
    { name: "Rust", color: "bg-orange-700", count: lessons.filter((l: Lesson) => l.language === "rust").length },
    { name: "Git", color: "bg-orange-600", count: lessons.filter((l: Lesson) => l.language === "git").length },
    { name: "Docker", color: "bg-blue-400", count: lessons.filter((l: Lesson) => l.language === "docker").length },
    { name: "AWS", color: "bg-yellow-600", count: lessons.filter((l: Lesson) => l.language === "aws").length },
    { name: "Linux", color: "bg-yellow-700", count: lessons.filter((l: Lesson) => l.language === "linux").length },
    { name: "AI/ML", color: "bg-pink-500", count: lessons.filter((l: Lesson) => l.language === "ai").length },
  ].filter(t => t.count > 0).sort((a, b) => b.count - a.count);

  return (
    <section className="mt-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 p-8 md:p-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
          Learn to code. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Build projects.</span> Get paid.
        </h1>
        <p className="mt-4 text-neutral-300 text-lg max-w-2xl relative z-10">
          🚀 Master programming with interactive lessons, {lessonsWithVideos}+ video tutorials, Isack AI tutor, and AI assistant! Start your coding journey today.
        </p>
        <div className="mt-8 flex gap-3 flex-wrap relative z-10">
          <Link className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 transition flex items-center gap-2 transform hover:scale-105" href="/courses">
            📚 Browse All Courses
          </Link>
          <Link className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:opacity-90 transition flex items-center gap-2 transform hover:scale-105" href="/isaac">
            🤖 Ask Isack AI
          </Link>
          <Link className="px-6 py-3 rounded-2xl bg-neutral-700 font-semibold hover:bg-neutral-600 transition flex items-center gap-2 transform hover:scale-105" href="/earn">
            💰 Earn Roadmap
          </Link>
        </div>
      </div>

      {/* Dynamic Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Lessons", value: totalLessons.toString(), icon: "📚", color: "from-blue-500 to-cyan-500" },
          { label: "Technologies", value: totalLanguages.toString(), icon: "🎯", color: "from-purple-500 to-pink-500" },
          { label: "AI Features", value: "3", icon: "🤖", color: "from-green-500 to-emerald-500" },
          { label: "Video Tutorials", value: lessonsWithVideos.toString(), icon: "🎬", color: "from-orange-500 to-red-500" },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-center transform hover:scale-105 transition-transform">
            <div className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.icon}</div>
            <div className="text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent">{stat.value}</div>
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
