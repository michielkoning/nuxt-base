import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },
  eslint: {
    config: {
      // Use the generated ESLint config for lint root project as well
      rootDir: fileURLToPath(new URL('..', import.meta.url)),
    },
  },
})
