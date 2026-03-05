import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  if (mode === "three-lib") {
    return {
      build: {
        outDir: "dist/three",
        emptyOutDir: true,
        copyPublicDir: false,
        lib: {
          entry: "src/three/index.ts",
          formats: ["es"],
          fileName: () => "index.js"
        },
        rollupOptions: {
          external: ["three"]
        }
      }
    };
  }

  return {
    // Use relative asset URLs so builds work when hosted from a repo subpath on GitHub Pages.
    base: "./",
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(repoRootDir, "index.html"),
          threeExample: path.resolve(repoRootDir, "three-example.html")
        }
      }
    },
    resolve: {
      alias: {
        "hepr/three": path.resolve(repoRootDir, "src/three/index.ts")
      }
    }
  };
});
