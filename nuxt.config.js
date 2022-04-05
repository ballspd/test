import en from './locales/en.json'
import th from './locales/th.json'
require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Sellsuki',
    title: 'sellsuki',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
          async: true,
          crossorigin: "anonymous"
      }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/css/custom.css',
    '~/assets/styles/css/bootstrap.min.css',
    '~/assets/styles/css/hover.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'animate.css/animate.min.css',
    'hooper/dist/hooper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{ src: './plugins/splide.js', mode: 'client' },
    { src: './plugins/vue-carousel.js', mode: 'client' },
    '~/plugins/head-util.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    // With options
    ['@nuxtjs/dotenv', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'vue-social-sharing/nuxt',
    '@nuxtjs/markdownit'
  ],
  i18n: {
    locales: ['en', 'th-TH'],
    defaultLocale: 'th-TH',
    vueI18n: {
      fallbackLocale: 'th-TH',
      messages: {
        'en':en,
        'th-TH':th
      }
    }
  },

  markdownit: {
    runtime: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'https://login.sellsuki.co.th/'
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: 'https://login.sellsuki.co.th/'
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: 'https://login.sellsuki.co.th/'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
