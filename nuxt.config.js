export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chatbot',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=360px' },
      { hid: 'description', name: 'description', content: 'TP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fastly.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.css'
      }
    ],
    script: [
      {
        src: 'https://fastly.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js',
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/common.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'static',

  router: {
    base: '/chatbot/'
  }
}
