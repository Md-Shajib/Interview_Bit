
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFWL2TdURqGQDNlpC8LIUfipvsK-WYYmE",
  authDomain: "vivabit.firebaseapp.com",
  projectId: "vivabit",
  storageBucket: "vivabit.firebasestorage.app",
  messagingSenderId: "972458250552",
  appId: "1:972458250552:web:1c8b7e8d50a297a58471cd",
  measurementId: "G-P0CPBMPYDR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
