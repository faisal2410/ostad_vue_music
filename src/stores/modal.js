
import { defineStore } from 'pinia'


export const useModalStore = defineStore('auth', {
    state: () => ({        
        authModalShow: true
      
    }),
    getters: {
       
    },
    actions: {
     
        toggleAuthModal() {

            return this.authModalShow = !this.authModalShow;

        },
    }
}) 