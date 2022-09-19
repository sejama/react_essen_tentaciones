// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection ,addDoc } from "firebase/firestore";
import  items  from "../componentes/datos";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk6aB37B5jq4_6POKQRvnAxxuB37JJxQ4",
  authDomain: "react-coder-80863.firebaseapp.com",
  projectId: "react-coder-80863",
  storageBucket: "react-coder-80863.appspot.com",
  messagingSenderId: "392816109529",
  appId: "1:392816109529:web:0da6b8647ef8388c101bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function saveItems(){
  const collectionItems = collection(db,"items");
  for (const item of items) {
    await addDoc(collectionItems, item);
  }
  
 
}

export default db;