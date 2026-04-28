import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const deployDir = join(root, "deploy");
const standaloneDir = join(root, ".next", "standalone");
const staticDir = join(root, ".next", "static");
const publicDir = join(root, "public");

if (!existsSync(standaloneDir)) {
  throw new Error("Missing .next/standalone. Run `npm run build` before preparing deploy.");
}

rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });

cpSync(standaloneDir, deployDir, { recursive: true });
cpSync(staticDir, join(deployDir, ".next", "static"), { recursive: true });

if (existsSync(publicDir)) {
  cpSync(publicDir, join(deployDir, "public"), { recursive: true });
}

console.log("Deploy folder is ready. Copy the `deploy` folder to the Raspberry Pi and run `node server.js` inside it.");
