// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ELDC5xYQM5-LbLfc2zH_mMrf56cUtng",
  authDomain: "realified-c08d9.firebaseapp.com",
  projectId: "realified-c08d9",
  storageBucket: "realified-c08d9.appspot.com",
  messagingSenderId: "294221353458",
  appId: "1:294221353458:web:d2e29460e3a3fda7369b6b",
  measurementId: "G-2L4C88TRZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
