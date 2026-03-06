import { NextResponse } from "next/server";
import { z } from "zod";

const Req = z.object({ code: z.string().min(1).max(50_000) });

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Req.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });

  const runner = process.env.RUNNER_URL || "http://localhost:8080";

  const r = await fetch(`${runner}/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language: "python", code: parsed.data.code })
  });

  const data = await r.json();
  return NextResponse.json(data, { status: r.status });
}
