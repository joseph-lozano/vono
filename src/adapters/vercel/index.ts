import { dirname, join } from "path";
import { Adapter } from "../index";
import { node } from "unenv";
import { fileURLToPath } from "url";
import {cpSync, readdirSync} from "fs";

export default () =>
  Adapter({
    name: "vercel",
    runtime: join(dirname(fileURLToPath(import.meta.url)), "entry"),
    outDir: ".vercel/output/static",
    serverDir: ".vercel/output/functions",
    publicDir: ".vercel/output/static",
    entryName: "index",
    env: node,
    onBuild() {
      cpSync("node_modules/@vonojs/vono/dist/adapters/vercel/config.json", ".vercel/output/config.json")
    },
  });
