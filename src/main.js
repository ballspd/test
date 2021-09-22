import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css/animate.min.css'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(router).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDTu9fOaHvHAANQVY9mUyKJ6ykTnCLLDFU',
    },
}).mount('#app')
