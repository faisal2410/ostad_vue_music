import { defineStore } from 'pinia'

import { auth, usersCollection } from "../includes/firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc } from "firebase/firestore"; 

export const useUserStore = defineStore('user', {
    state: () => ({
        userLoggedIn:false
        
    }),
    actions: {
        async register(values) {
        const userCred=    await createUserWithEmailAndPassword(auth, values.email, values.password);

          const docRef=  await addDoc(usersCollection, {
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country
            })

            console.log("Document written with ID: ", docRef.id);
            console.log(userCred)
            this.userLoggedIn = true;
            console.log("=====>Submitted Data====>", values)
            window.location.reload()
        },
        async authenticate(values) {
            console.log(values)

            await signInWithEmailAndPassword(auth, values.email, values.password)
            this.userLoggedIn = true;
            window.location.reload()
            
        },

        async signOut() {
            await signOut(auth)
            this.userLoggedIn = false;
            window.location.reload()
        }
    }
})