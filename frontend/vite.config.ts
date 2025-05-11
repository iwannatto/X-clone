import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // form-data へのインポートを shim に向ける
      "form-data": "/src/shims/form-data.ts",
      // もし shared/api-client を @api-client みたいな別名にしているなら
      // '@api-client': path.resolve(__dirname, '../shared/api-client'),
    },
  },
  server: {
    port: 3010,
    host: true,
  },
});
