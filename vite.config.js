import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        // Add an alias for the problematic path
        {
          find: "../../components/common",
          replacement: "/src/components/Common",
        },
      ],
    }),
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  server: {
    host: true, 
  },
  resolve: {
    alias: {
      "@common": "/src/components/common",
    },
  },
});
