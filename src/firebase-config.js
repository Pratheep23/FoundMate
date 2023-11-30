// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4oJzZTvRXd-EP-BsynVZWC-y7sqY_zL8",
  authDomain: "foundmate-4bbfe.firebaseapp.com",
  projectId: "foundmate-4bbfe",
  storageBucket: "foundmate-4bbfe.appspot.com",
  messagingSenderId: "1018368045910",
  appId: "1:1018368045910:web:8a367e5941176ea09adcf7",
  measurementId: "G-JHRDV810W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

