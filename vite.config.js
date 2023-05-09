import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "My Weather",
        short_name: "My Weather",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/favicon.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        background_color: "#2C5E86",
        categories: ["nature", "weather", "realtime"],
        description:
          "This is a web app developed for looking for the weather of any city around the world in a easily, simply, faster and great way!",
        display: "standalone",
        start_url: "./?utm_source=web_app_manifest",
        scope: "./",
        theme_color: "#2C5E86",
        lang: "en-US",
      },
    }),
  ],
});
