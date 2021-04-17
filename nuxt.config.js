export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-application-1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  tailwindcss: {
    cssPath: '~/assets/globalStyles/tailwind.css',
    configPath: '~/config/tailwind.js',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vuelidate.js',
    { ssr: false, src: '~/plugins/automatiqueLogin.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    //https://github.com/nuxt-community/global-components
    '@nuxtjs/global-components',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Server Port Number
  server: {
    port: 8081,
  },
  env: {
    DEV_BASE_URL: 'http://localhost:8080',
    PROD_API: '/proxy',
    DEV_LOGIN_API: 'http://localhost:3000',
  },
  // router middlware hook
  router: {
    middleware: 'checkProtectedRoutes',
  },
}
