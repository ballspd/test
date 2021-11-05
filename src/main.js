import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css/animate.min.css'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import th from './locales/th.json'

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages:{
        en:en,
        th:th
    }
})

const lang = localStorage.getItem('lang') || 'en'
axios.defaults.baseURL = 'https://staging-sellsukiadmin.bearyweb.com/'
axios.defaults.headers['Accept-language'] = lang

createApp(App).use(router).use(VueAxios, axios).use(VueSweetalert2).use(i18n).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDTu9fOaHvHAANQVY9mUyKJ6ykTnCLLDFU',
    },
}).mount('#app')
