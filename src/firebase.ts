
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
  apiKey: "AIzaSyA0SVw1K4_hDWsP7m0P2gZ_5JHAFhVnd2Y",
  authDomain: "stvimpletacao.firebaseapp.com",
  projectId: "stvimpletacao",
  storageBucket: "stvimpletacao.firebasestorage.app",
  messagingSenderId: "734167486178",
  appId: "1:734167486178:web:1261730912177d76b498bb",
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
export const API_BASE_URL = "https://condominiosapi-zqa3bu55yq-uc.a.run.app";
