import { defineConfig } from "vite";
import { resolve } from "node:path";
export default defineConfig({
  base: "/yww_object_detection/",
  build: { rollupOptions: { input: { main: resolve(__dirname, "index.html"), papers: resolve(__dirname, "papers.html"), wmc: resolve(__dirname, "wmc-report.html") } } }
});
