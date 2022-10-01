// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBjR1cPvBg8YUKgQ-PU0Eo_88_sRZCpXpI",
    authDomain: "twit-test-clone.firebaseapp.com",
    projectId: "twit-test-clone",
    storageBucket: "twit-test-clone.appspot.com",
    messagingSenderId: "1098130262146",
    appId: "1:1098130262146:web:54c5cca4ca8e408f570c9b",
    measurementId: "G-EMJYJH9E75"
  };
  
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
