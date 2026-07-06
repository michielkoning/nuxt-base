// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxt/image',
    '@vee-validate/nuxt',
  ],
  components: [
    '~/components',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,viewport-fit=cover',
        },

        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black',
        },
      ],
    },
  },
  css: [join(currentDir, './app/assets/css/base.css')],
  compatibilityDate: '2026-07-02',
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },
  typescript: {
    typeCheck: true,
  },
  telemetry: false,
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
