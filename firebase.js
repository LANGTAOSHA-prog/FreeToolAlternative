import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIVniEZd0pCnQZjje4tGex2IQZWE_kq3c",
  authDomain: "tools-f56b4.firebaseapp.com",
  projectId: "tools-f56b4",
  storageBucket: "tools-f56b4.firebasestorage.app",
  messagingSenderId: "935727106241",
  appId: "1:935727106241:web:66282682db2f92fc1dac40",
  measurementId: "G-CRP5R6562D"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
try { getAnalytics(app); } catch (e) { console.warn('Analytics unavailable:', e); }
