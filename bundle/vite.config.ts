import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const url = import.meta.url;

const __dirname = dirname(fileURLToPath(url));

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        result: resolve(__dirname, "src/result.ts"),
      },
      name: "@arthurgubaidullin/lib-ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
