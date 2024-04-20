// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDInUSTGp18kAn-EMFkhHwpPYvujGSbsFI",
  authDomain: "task-ee97a.firebaseapp.com",
  projectId: "task-ee97a",
  storageBucket: "task-ee97a.appspot.com",
  messagingSenderId: "426785101235",
  appId: "1:426785101235:web:f61c27c03ad045267aa7c6",
  measurementId: "G-HS42CVM3W2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};