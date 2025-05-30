import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['@/assets/styles/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    'shadcn-nuxt',
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: ''
      }
    ]
  ]
})
