// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyDOYWDNfkARWTzdNz_gcmD64hCgFcBzE5E",
  authDomain: "distrito-3e4b9.firebaseapp.com",
  projectId: "distrito-3e4b9",
  storageBucket: "distrito-3e4b9.appspot.com",
  messagingSenderId: "759654071737",
  appId: "1:759654071737:web:7e1a4ac683d1a6487c8a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
