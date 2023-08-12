
import { defineStore } from 'pinia'



export const useModalStore = defineStore('modal', {
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