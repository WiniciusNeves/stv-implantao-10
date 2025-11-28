
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWiFzXahZtLp7z7Ez-0TgVyNUO8xyx2B0",
  authDomain: "stvimplantacao.firebaseapp.com",
  projectId: "stvimplantacao",
  storageBucket: "stvimplantacao.firebasestorage.app",
  messagingSenderId: "507383458204",
  appId: "1:507383458204:web:279cadf39a3934f9ef8059",
  measurementId: "G-M5F9YWBTVP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.log("Firebase Analytics not available");
}
export const auth = getAuth(app);
export const db = getFirestore(app);
export const API_BASE_URL = "https://condominiosapi-kpg52ledoq-uc.a.run.app";
