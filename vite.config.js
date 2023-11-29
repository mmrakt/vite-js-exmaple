import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from "path";

export default defineConfig({
  base: "/dist",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  plugins: [ViteEjsPlugin()],
  css: {
    devSourcemap: true,
  },
});
