import './assets/main.css'
// import  "./includes/firebase.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

let app;


const auth = getAuth();
onAuthStateChanged(auth, () => {
    if (!app) {
        const pinia = createPinia();
        pinia.use(({ store }) => {
            store.router = markRaw(router);
        });

         app = createApp(App)

        app.use(pinia)
        app.use(router)

        app.mount('#app') 
    }

});



