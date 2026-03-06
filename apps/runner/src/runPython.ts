import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

type Args = {
  code: string;
  stdin: string;
  timeoutMs: number;
  maxOutputChars: number;
};

export async function runPython(args: Args) {
  const work = mkdtempSync(join(tmpdir(), "py-run-"));
  const file = join(work, "main.py");
  writeFileSync(file, args.code, "utf8");

  const started = Date.now();

  return await new Promise((resolve, reject) => {
    const p = spawn("python3", [file], {
      cwd: work,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let out = "";
    let err = "";
    let killed = false;

    const killTimer = setTimeout(() => {
      killed = true;
      p.kill("SIGKILL");
    }, args.timeoutMs);

    p.stdin.write(args.stdin ?? "");
    p.stdin.end();

    p.stdout.on("data", (d) => {
      out += d.toString("utf8");
      if (out.length > args.maxOutputChars) out = out.slice(0, args.maxOutputChars) + "\n…(truncated)";
    });

    p.stderr.on("data", (d) => {
      err += d.toString("utf8");
      if (err.length > args.maxOutputChars) err = err.slice(0, args.maxOutputChars) + "\n…(truncated)";
    });

    p.on("close", (code) => {
      clearTimeout(killTimer);
      try { rmSync(work, { recursive: true, force: true }); } catch {}

      const ms = Date.now() - started;

      if (killed) {
        return resolve({
          exitCode: null,
          stdout: out,
          stderr: (err || "") + `\nTimeout after ${args.timeoutMs}ms`,
          runtimeMs: ms,
        });
      }

      resolve({
        exitCode: code,
        stdout: out,
        stderr: err,
        runtimeMs: ms,
      });
    });

    p.on("error", (e) => {
      clearTimeout(killTimer);
      try { rmSync(work, { recursive: true, force: true }); } catch {}
      reject(e);
    });
  });
}
