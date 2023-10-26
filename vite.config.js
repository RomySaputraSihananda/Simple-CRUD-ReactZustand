import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Simple-CRUD-ReactZustand/",
  plugins: [react()],
});
