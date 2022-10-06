// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxZEVCwTv9B8yOvM8qN7fFJKcGzUEwSaQ",
  authDomain: "next-2ef7f.firebaseapp.com",
  databaseURL: "https://next-2ef7f-default-rtdb.firebaseio.com",
  projectId: "next-2ef7f",
  storageBucket: "next-2ef7f.appspot.com",
  messagingSenderId: "514181378748",
  appId: "1:514181378748:web:055e16f127a88d39f456b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db}
