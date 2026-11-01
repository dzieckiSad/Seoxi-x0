import { defineConfig } from 'vite';
import { rundotGameLibrariesPlugin } from "@series-inc/rundot-game-sdk/vite";

// CDN assets in cdn/ folder are automatically served in dev mode

export default defineConfig({
  plugins: [rundotGameLibrariesPlugin()],
  base: "./",
  server: {
    allowedHosts: true,
  },
  build: {
    target: "es2022", // Support top-level await for embedded libraries
  },
});
