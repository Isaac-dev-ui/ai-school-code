import express from "express";
import { z } from "zod";
import { runPython } from "./runPython";

const app = express();
app.use(express.json({ limit: "200kb" }));

const RunReq = z.object({
  language: z.enum(["python"]),
  code: z.string().min(1).max(50_000),
  stdin: z.string().optional().default(""),
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/run", async (req, res) => {
  const parsed = RunReq.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ ok: false, error: parsed.error.flatten() });

  const { code, stdin } = parsed.data;

  const maxMs = Number(process.env.MAX_RUNTIME_MS ?? "2000");
  const maxOut = Number(process.env.MAX_OUTPUT_CHARS ?? "8000");

  try {
    const result = await runPython({ code, stdin, timeoutMs: maxMs, maxOutputChars: maxOut });
    return res.json({ ok: true, result });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message ?? "Runner error" });
  }
});

const port = 8080;
app.listen(port, () => console.log(`Runner listening on http://localhost:${port}`));
