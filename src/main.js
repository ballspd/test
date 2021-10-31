import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css/animate.min.css'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(VueAxios, axios).use(VueSweetalert2).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDTu9fOaHvHAANQVY9mUyKJ6ykTnCLLDFU',
    },
}).mount('#app')
