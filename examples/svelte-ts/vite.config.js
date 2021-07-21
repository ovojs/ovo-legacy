import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import preprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [svelte({
    preprocess: preprocess()
  })],
  build: {
    minify: true,
  }
})