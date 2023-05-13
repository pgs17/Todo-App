import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCca-ZZzn_wGJdsmTsPLObIYPeMYQr343g",
    authDomain: "drive-ed83e.firebaseapp.com",
    projectId: "drive-ed83e",
    storageBucket: "drive-ed83e.appspot.com",
    messagingSenderId: "344399258326",
    appId: "1:344399258326:web:930ebb98584bb115bf1f77",
    measurementId: "G-XMFLSWX4Z6"
  };

// initialise firebase and references to auth
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth= getAuth(app);
export default app