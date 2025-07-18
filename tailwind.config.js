import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "crisp-green": "#33673b",
        "crisp-orange": "#cc3f0c",
      },
    },
  },
  plugins: [],
});
