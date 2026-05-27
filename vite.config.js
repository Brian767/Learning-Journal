import { dirname, resolve } from "node:path"
import { defineConfig } from "vite"

export default defineConfig({
  base: "/",
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "pages/about.html"),
        hero: resolve(import.meta.dirname, "pages/hero.html"),
      },
    },
  },
  plugins: []
})