// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@pinia/nuxt'],

  imports: {
    dirs: [],
  },

  devtools: { enabled: true },

  app: { head: { htmlAttrs: { lang: 'ru' } } },

  dir: {
    pages: '_routes',
    middleware: '_middleware',
  },

  compatibilityDate: '2025-11-18',

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
