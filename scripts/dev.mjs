import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isWindows = process.platform === "win32";
const isMac = process.platform === "darwin";

console.log("🚀 Starting Next.js 15 dev server & launching default browser...");

const nextBin = path.resolve(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

// Launch Next.js dev server directly via Node executable
const nextDev = spawn(process.execPath, [nextBin, "dev"], {
  stdio: "inherit",
});

// Automatically open the default browser once the server is ready
setTimeout(() => {
  const targetUrl = "http://localhost:3000";
  if (isWindows) {
    spawn("cmd.exe", ["/c", "start", targetUrl]);
  } else if (isMac) {
    spawn("open", [targetUrl]);
  } else {
    spawn("xdg-open", [targetUrl]);
  }
}, 2000);

process.on("SIGINT", () => {
  nextDev.kill();
  process.exit();
});

process.on("SIGTERM", () => {
  nextDev.kill();
  process.exit();
});
