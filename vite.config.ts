import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from "vite-tsconfig-paths";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const aliases = {
  "@pages": resolve(__dirname, "./src/pages"),
  "@assets": resolve(__dirname, "./src/assets"),
};

export default defineConfig({
  plugins: [
    react({ include: "**/.*.tsx,.jsx" }),
    viteTsConfigPaths({ root: "." }),
  ],
  server: {
    port: 3000,
    host: "localhost",
  },
  resolve: {
    alias: aliases,
  },
});



