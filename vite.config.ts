import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[local]-[hash:base64:7]",
    },
    preprocessorOptions: {
      scss: {
        includePaths: ["./src"],
      },
    },
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@utils": resolve(__dirname, "src/utils"),
      "@db": resolve(__dirname, "src/db"),
      icons: resolve(__dirname, "src/assets/icons"),
    },
  },
});
