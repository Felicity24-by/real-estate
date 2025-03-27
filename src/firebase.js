// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estates-comps.firebaseapp.com",
  projectId: "estates-comps",
  storageBucket: "estates-comps.firebasestorage.app",
  messagingSenderId: "228164703262",
  appId: "1:228164703262:web:e453fd944ff843414c0a0f",
  measurementId: "G-3E8CBRJBVF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
