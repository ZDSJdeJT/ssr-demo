import type { BuildConfig } from "bun";

export default {
  entrypoints: ["./src/client.tsx"],
  outdir: "dist",
  target: "browser",
  format: "esm",
  minify: true,
} satisfies BuildConfig;
