import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import router from "@/router/index";

import "@/assets/sass/main.scss"

// import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios';

const pinia = createPinia()

loadFonts()

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios)
    .use(vuetify)
    .mount('#app')
