import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from "path";

export default defineConfig({
  base: "/dist",
  publicDir: "./src/images",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          console.log(assetInfo);
          if (assetInfo.name.endsWith(".css")) {
            return "assets/css/common.[extname]";
          }
          if (assetInfo.name.endsWith(".js")) {
            return "assets/js/[name][extname]";
          }
          if (
            /\.(gif|jpe?g|png|svg|tiff?|webp|bmp|ico)$/.test(assetInfo.name)
          ) {
            return "assets/images/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  plugins: [ViteEjsPlugin()],
  css: {
    devSourcemap: true,
  },
});
