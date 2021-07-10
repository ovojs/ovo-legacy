import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "OvO",
      fileName: "ovo",
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})