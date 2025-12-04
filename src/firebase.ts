
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
  apiKey: "AIzaSyDo8Y-ggdy_uHKSkOJ_60Qre1OSA_WJuAs",
  authDomain: "stvimplantacao-c52c1.firebaseapp.com",
  projectId: "stvimplantacao-c52c1",
  storageBucket: "stvimplantacao-c52c1.firebasestorage.app",
  messagingSenderId: "725447277302",
  appId: "1:725447277302:web:225c38d401f73a057e4ad7"
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
export const API_BASE_URL = "https://condominiosapi-zw34mt6nba-uc.a.run.app";
