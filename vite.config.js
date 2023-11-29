import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from "path";
// import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/dist",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: false,
  },
  plugins: [ViteEjsPlugin()],
  css: {
    devSourcemap: true,
  },
});
