// @ts-check
import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import react from "@astrojs/react";
import relativeLinks from "astro-relative-links";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 本番URL（OGP・canonical用）。ローカルビルド時もOGPを正しく認識させるためSITEを設定
  site: process.env.SITE ?? "https://thunder-thunder.com",

  server: {
    port: 4545
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    relativeLinks(),
    react(),
    alpine({ entrypoint: "/src/entrypoint" })
  ]
});
