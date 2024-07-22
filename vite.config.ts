import react from "@vitejs/plugin-react";
import { defineConfig, transformWithEsbuild } from "vite";
import restart from "vite-plugin-restart";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/",
  publicDir: "../public/",
  plugins: [
    // Restart server on static/public file change
    restart({ restart: ["../public/**"] }),

    // React support
    react(),

    // .js file support as if it was JSX
    {
      name: "load+transform-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
});
