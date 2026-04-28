import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const deployDir = join(root, "deploy");
const outDir = join(root, "out");

if (!existsSync(outDir)) {
  throw new Error("Missing out folder. Run `npm run build` before preparing deploy.");
}

rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });

cpSync(outDir, deployDir, { recursive: true });

console.log("Deploy folder is ready. Copy the `deploy` folder contents to your Nginx web root.");
