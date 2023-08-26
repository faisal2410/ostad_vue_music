// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTVt9ymcBj7luisgMPvtnrnp54t-cQerU",
    authDomain: "music-89979.firebaseapp.com",
    projectId: "music-89979",
    storageBucket: "music-89979.appspot.com",
    messagingSenderId: "969425775114",
    appId: "1:969425775114:web:4ed6c57179bea4b5f00df3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const usersCollection=collection(db,"users")

export {auth,db,usersCollection}