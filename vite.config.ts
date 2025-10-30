import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ✅ Correct base path for GitHub Pages deployment
  base: mode === "production" ? "/neelkanth-essence-site/" : "/",

  server: {
    host: "::", // Allows access from all network interfaces
    port: 8080,
    open: true, // Automatically opens in browser during dev
  },

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []), // Only enable tagger in dev
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Simplified imports
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode === "development", // Easier debugging
    rollupOptions: {
      output: {
        manualChunks: undefined, // Avoid chunk splitting issues with GitHub Pages
      },
    },
  },
}));
