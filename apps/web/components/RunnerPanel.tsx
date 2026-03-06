"use client";

import Editor from "@monaco-editor/react";
import { useMemo, useState } from "react";

type Props = {
  language: "html" | "css" | "javascript" | "python" | "swift" | "kotlin" | "c" | "cpp" | "rust" | "r" | "sql" | "php" | "react" | "nodejs" | "jquery" | "bootstrap" | "typescript" | "json" | "xml" | "go" | "docker" | "sass" | "vue" | "angular" | "ajax" | "mysql" | "postgresql" | "mongodb" | "django" | "flask" | "java" | "jsp" | "spring" | "numpy" | "pandas" | "matplotlib" | "git" | "github" | "cybersecurity" | "accessibility" | "xpath" | "xslt" | "excel" | "ai" | "ruby" | "linux" | "aws" | "kubernetes" | "shell";
  starterCode: string;
  lessonTitle: string;
  lessonSummary: string;
};

export default function RunnerPanel(props: Props) {
  const [code, setCode] = useState(props.starterCode);
  const [tab, setTab] = useState<"preview" | "output">("preview");
  const [pyOut, setPyOut] = useState("");
  const [pyErr, setPyErr] = useState("");
  const [loading, setLoading] = useState(false);

  const isWeb = props.language === "html" || props.language === "css" || props.language === "javascript";
  const isPython = props.language === "python";
  const isRunnable = isPython || props.language === "swift" || props.language === "kotlin" || props.language === "cpp" || props.language === "rust" || props.language === "r";

  const iframeDoc = useMemo(() => {
    if (!isWeb) return "";
    return code;
  }, [code, isWeb]);

  async function runPython() {
    setLoading(true);
    setPyOut("");
    setPyErr("");
    setTab("output");
    try {
      const res = await fetch("/api/run-python", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Runner failed");
      setPyOut(data.result.stdout || "");
      setPyErr(data.result.stderr || "");
    } catch (e: any) {
      setPyErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">{props.lessonTitle}</div>
            <div className="text-xs text-neutral-500">{props.lessonSummary}</div>
          </div>
          <button
            onClick={() => (isWeb ? setTab("preview") : isPython ? runPython() : setTab("output"))}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold disabled:opacity-60"
            disabled={loading}
          >
            {props.language === "python" || isRunnable ? (loading ? "Running..." : `Run ${props.language.charAt(0).toUpperCase() + props.language.slice(1)}`) : "Run"}
          </button>
        </div>

        <div className="mt-4 rounded-2xl overflow-hidden border border-neutral-800">
          <Editor
            height="420px"
            language={props.language === "python" || props.language === "swift" || props.language === "kotlin" || props.language === "cpp" || props.language === "rust" || props.language === "r" ? props.language : "html"}
            theme="vs-dark"
            value={code}
            onChange={(v) => setCode(v ?? "")}
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              wordWrap: "on"
            }}
          />
        </div>

        <div className="mt-3 text-xs text-neutral-500">
          Tip: For HTML/CSS/JS, write a full HTML document. For Python, just write Python code.
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
        <div className="flex items-center gap-2 text-sm">
          <button
            className={`px-3 py-2 rounded-xl ${tab === "preview" ? "bg-neutral-800" : "bg-neutral-950"} border border-neutral-800`}
            onClick={() => setTab("preview")}
            disabled={!isWeb}
            title={!isWeb ? "Python uses Output tab" : ""}
          >
            Preview
          </button>
          <button
            className={`px-3 py-2 rounded-xl ${tab === "output" ? "bg-neutral-800" : "bg-neutral-950"} border border-neutral-800`}
            onClick={() => setTab("output")}
          >
            Output
          </button>
        </div>

        <div className="mt-4 rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden">
          {tab === "preview" && isWeb ? (
            <iframe
              title="preview"
              className="w-full h-[420px]"
              sandbox="allow-scripts allow-forms allow-modals"
              srcDoc={iframeDoc}
            />
          ) : (
            <div className="p-4 text-sm">
              <div className="text-neutral-200 font-semibold">stdout</div>
              <pre className="mt-2 whitespace-pre-wrap text-neutral-300">{pyOut || "(empty)"}</pre>
              <div className="mt-4 text-neutral-200 font-semibold">stderr</div>
              <pre className="mt-2 whitespace-pre-wrap text-rose-200">{pyErr || "(empty)"}</pre>
            </div>
          )}
        </div>

        <AITutor lessonTitle={props.lessonTitle} lessonSummary={props.lessonSummary} language={props.language} code={code} pyError={pyErr} />
      </div>
    </div>
  );
}

function AITutor(props: { lessonTitle: string; lessonSummary: string; language: string; code: string; pyError: string }) {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<Array<{ role: "user" | "ai"; text: string }>>([]);
  const [busy, setBusy] = useState(false);

  async function send(kind: "explain" | "fix" | "quiz" | "exercise") {
    setBusy(true);
    const userText =
      kind === "explain" ? "Explain this code simply."
      : kind === "fix" ? "Fix my code and explain what you changed."
      : kind === "quiz" ? "Quiz me with 5 questions on this lesson."
      : "Give me one practice task and a solution.";

    const payload = {
      kind,
      lessonTitle: props.lessonTitle,
      lessonSummary: props.lessonSummary,
      language: props.language,
      code: props.code,
      error: props.pyError
    };

    setChat((c) => [...c, { role: "user", text: userText }]);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Tutor failed");
      setChat((c) => [...c, { role: "ai", text: data.text }]);
    } catch (e: any) {
      setChat((c) => [...c, { role: "ai", text: `Error: ${e?.message ?? "Tutor error"}` }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
      <div className="font-semibold">AI Tutor</div>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <button className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800" disabled={busy} onClick={() => send("explain")}>Explain</button>
        <button className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800" disabled={busy} onClick={() => send("fix")}>Fix</button>
        <button className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800" disabled={busy} onClick={() => send("quiz")}>Quiz</button>
        <button className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800" disabled={busy} onClick={() => send("exercise")}>Exercise</button>
      </div>

      <div className="mt-3 space-y-3 max-h-56 overflow-auto text-sm">
        {chat.map((m, i) => (
          <div key={i} className={m.role === "ai" ? "text-neutral-200" : "text-neutral-400"}>
            <div className="text-xs uppercase tracking-wide opacity-70">{m.role}</div>
            <div className="whitespace-pre-wrap">{m.text}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Ask anything… (optional)"
          className="flex-1 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 outline-none"
        />
        <button
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold"
          disabled={busy || !msg.trim()}
          onClick={async () => {
            setBusy(true);
            setChat((c) => [...c, { role: "user", text: msg }]);
            try {
              const res = await fetch("/api/tutor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  kind: "custom",
                  lessonTitle: props.lessonTitle,
                  lessonSummary: props.lessonSummary,
                  language: props.language,
                  code: props.code,
                  error: props.pyError,
                  question: msg
                })
              });
              const data = await res.json();
              if (!data.ok) throw new Error(data.error || "Tutor failed");
              setChat((c) => [...c, { role: "ai", text: data.text }]);
              setMsg("");
            } catch (e: any) {
              setChat((c) => [...c, { role: "ai", text: `Error: ${e?.message ?? "Tutor error"}` }]);
            } finally {
              setBusy(false);
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
