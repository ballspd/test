import en from './locales/en.json'
import th from './locales/th.json'
require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  //mode: 'spa',
  ssr: true,
  target: 'static',
  //ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Sellsuki',
    title: 'sellsuki',
    // htmlAttrs: {
    //   lang: 'en',
    // },
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'y3SPcUi4BBJcORn-mg0hoeh7213idJCbHcjJI6PY7QE' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: ['Sellsuki', 'Solution', 'โฆษณาออนไลน์', 'วางแผนคอนเทนต์', 'ออกแบบเว็บไซต์' , 'คลังสินค้าครบวงจร'] },
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'og-site_name', 
                    property: 'og:site_name', 
                    name: 'og:site_name', 
                    content: 'Sellsuki'
                },
                { 
                    hid: 'og-title', 
                    property: 'og:title', 
                    name: 'og:title', 
                    content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'og-description', 
                    property: 'og:description', 
                    name: 'og:description', 
                    content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'og-image', 
                    property: 'og:image', 
                    name: 'og:image', 
                    content: 'https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Home_826a845399.webp'
                },
                { 
                    hid: 'og-url', 
                    property: 'og:url', 
                    name: 'og:url', 
                    content: 'https://www.sellsuki.co.th/'
                },
                { 
                    hid: 'twitter-title', 
                    name: 'twitter:title', 
                    content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'twitter-description', 
                    name: 'twitter:description', 
                    content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                },
                { 
                    hid: 'twitter-image', 
                    name: 'twitter:image', 
                    content: 'https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Home_826a845399.webp'
                },
                { 
                    hid: 'twitter-url', 
                    property: 'twitter:url', 
                    name: 'twitter:url', 
                    content: 'https://www.sellsuki.co.th/'
                },
                { 
                    hid: 'twitter-card', 
                    name: 'twitter:card',
                    content: 'Sellsuki บริการ Solution ครบวงจรสำหรับคนทำธุรกิจออนไลน์ โฆษณาออนไลน์ วางแผนคอนเทนต์ ออกแบบเว็บไซต์ และคลังสินค้าครบวงจร'
                }
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
    '~/plugins/head-util.js',
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
    '@nuxtjs/markdownit',
    '@nuxtjs/gtm',
    'nuxt-facebook-pixel-module',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    
    // With options
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],

  sitemap: {
    hostname: 'https://www.sellsuki.co.th/',
    // gzip: true,
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '320126622270975',
    autoPageView: true,
    disabled: false
  },

  gtm: {
    id: 'GTM-MPPDKR2'
  },

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
  build: {
    publicPath: '/nuxt/',
  },

  generate: { 
    fallback: '404.html',
    //subFolders: false
 },
}
