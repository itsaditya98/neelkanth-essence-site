import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ✅ Correct base for both local & GitHub Pages
  base: mode === "production" ? "/neelkanth-essence-site/" : "/",

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "::",
    port: 8080,
    open: true,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
