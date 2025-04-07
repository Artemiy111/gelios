// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@pinia/nuxt'],

  imports: {
    dirs: [],
  },

  devtools: { enabled: true },

  app: { head: { htmlAttrs: { lang: 'ru' } } },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',

  // nitro: {
  //   experimental: {
  //     openAPI: true,
  //   },
  // },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
