"use client";

import { useState } from "react";

type Plan = {
  ideas: string[];
  roadmap: string;
  proposal: string;
  checklist: string[];
};

export default function Earn() {
  const [skill, setSkill] = useState("");
  const [niche, setNiche] = useState("");
  const [time, setTime] = useState("1-2 hours/day");
  const [goal, setGoal] = useState("freelance");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [error, setError] = useState("");

  const generatePlan = async () => {
    if (!skill || !niche) {
      setError("Please select both a skill and niche!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/earn-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill, niche, time, goal })
      });
      const data = await res.json();
      if (data.ok) {
        setPlan(data.plan);
      } else {
        setError(data.error || "Failed to generate plan");
      }
    } catch (e) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">💰 Earn With Your Skills</h1>
      <p className="mt-2 text-neutral-400">
        Generate a personalized roadmap to start earning money with your coding skills!
      </p>

      {/* Skills & Opportunities Overview */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
          <div className="text-2xl mb-2">🌐</div>
          <div className="font-semibold">Web Development</div>
          <p className="text-sm text-neutral-400 mt-1">Landing pages, portfolios, e-commerce sites</p>
          <p className="text-xs text-green-400 mt-2">$50-500 per project</p>
        </div>
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
          <div className="text-2xl mb-2">🤖</div>
          <div className="font-semibold">Isack AI & Automation</div>
          <p className="text-sm text-neutral-400 mt-1">Chatbots, workflow automation, data processing</p>
          <p className="text-xs text-green-400 mt-2">$100-1000 per project</p>
        </div>
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
          <div className="text-2xl mb-2">📱</div>
          <div className="font-semibold">Mobile Apps</div>
          <p className="text-sm text-neutral-400 mt-1">Utility apps, mobile games, prototypes</p>
          <p className="text-xs text-green-400 mt-2">$200-2000 per project</p>
        </div>
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold">Data & Analytics</div>
          <p className="text-sm text-neutral-400 mt-1">Dashboards, reports, visualizations</p>
          <p className="text-xs text-green-400 mt-2">$75-750 per project</p>
        </div>
      </div>

      {/* AI Planner Form */}
      <div className="mt-8 p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
        <h2 className="text-xl font-semibold mb-4">🤖 Isack AI Earn Planner</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-2">Your Skill</label>
            <select 
              value={skill} 
              onChange={(e) => setSkill(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700"
            >
              <option value="">Select a skill...</option>
              <option value="html">HTML/CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="mobile">Mobile (Swift/Kotlin)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-2">Your Niche/Industry</label>
            <select 
              value={niche} 
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700"
            >
              <option value="">Select a niche...</option>
              <option value="restaurants">Restaurants & Food</option>
              <option value="realestate">Real Estate</option>
              <option value="healthcare">Healthcare & Fitness</option>
              <option value="education">Education</option>
              <option value="ecommerce">E-commerce</option>
              <option value="finance">Finance & Consulting</option>
              <option value="creative">Creative (Art, Music, Design)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-2">Time Available</label>
            <select 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700"
            >
              <option>1-2 hours/day</option>
              <option>3-5 hours/day</option>
              <option>5+ hours/day</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-2">Your Goal</label>
            <select 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700"
            >
              <option value="freelance">Freelance Gigs</option>
              <option value="templates">Sell Templates/Products</option>
              <option value="saas">Build Small SaaS</option>
              <option value="job">Land a Job</option>
            </select>
          </div>
        </div>

        <button
          onClick={generatePlan}
          disabled={loading}
          className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 font-semibold disabled:opacity-50"
        >
          {loading ? "Generating..." : "🚀 Generate My Earn Plan"}
        </button>

        {error && <p className="mt-3 text-red-400">{error}</p>}
      </div>

      {/* Generated Plan */}
      {plan && (
        <div className="mt-8 space-y-6">
          {/* Project Ideas */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-4">💡 Project Ideas</h3>
            <ul className="space-y-2">
              {plan.ideas.map((idea, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-400">•</span>
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-4">📅 Roadmap</h3>
            <div className="whitespace-pre-wrap text-neutral-300">{plan.roadmap}</div>
          </div>

          {/* Proposal Template */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-4">📝 Proposal Template</h3>
            <div className="whitespace-pre-wrap text-neutral-300 font-mono text-sm bg-neutral-800 p-4 rounded-xl">{plan.proposal}</div>
          </div>

          {/* Checklist */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-4">✅ Delivery Checklist</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {plan.checklist.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-8 p-4 rounded-xl bg-yellow-900/20 border border-yellow-700/50">
        <p className="text-sm text-yellow-200">
          ⚠️ <strong>Disclaimer:</strong> Earnings shown are estimates and not guaranteed. 
          Your actual income depends on your skills, effort, market demand, and networking. 
          Always deliver quality work and build your reputation.
        </p>
      </div>
    </div>
  );
}
