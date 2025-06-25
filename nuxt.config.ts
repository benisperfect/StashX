import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuratio n/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.css"],

  nitro: {
    preset: "vercel",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "shadcn-nuxt",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
  ],
});
