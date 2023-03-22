// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        isolatedModules: true,
        esModuleInterop: true,
        types: ['vite-plugin-pwa/client']
      }
    },
    strict: true
  }
})
