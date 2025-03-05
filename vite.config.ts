import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  build: {
    // Misalnya, tetapkan batas inline menjadi 10 MB (10.000.000 bytes)
    assetsInlineLimit: 5000000,
  },
});
