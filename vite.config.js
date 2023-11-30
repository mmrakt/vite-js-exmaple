import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from "path";

const args = process.argv;
const needRevision = args.includes("--revision");

export default defineConfig(({ mode }) => {
  return {
    base: "/dist",
    build: {
      outDir: resolve(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let dir = "";
            if (assetInfo.name.endsWith(".css")) {
              dir = "css/";
            }
            if (assetInfo.name.endsWith(".js")) {
              dir = "js/";
            }
            if (
              /\.(gif|jpe?g|png|svg|tiff?|webp|bmp|ico)$/.test(assetInfo.name)
            ) {
              dir = "images/";
            }
            return `assets/${dir}[name]${
              needRevision === true ? "-[hash]" : ""
            }[extname]`;
          },
          chunkFileNames: `assets/js/[name]${
            needRevision === true ? "-[hash]" : ""
          }.js`,
          entryFileNames: `assets/js/[name]${
            needRevision === true ? "-[hash]" : ""
          }.js`,
        },
      },
    },
    plugins: [ViteEjsPlugin()],
    css: {
      devSourcemap: true,
    },
  };
});
