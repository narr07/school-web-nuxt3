// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    'nuxt-delay-hydration',
  ]
})
