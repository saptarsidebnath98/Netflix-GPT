// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaeK_8yNGe8LtBNNV4rJu13I_lvbdilQA",
  authDomain: "netflixgpt-c7894.firebaseapp.com",
  projectId: "netflixgpt-c7894",
  storageBucket: "netflixgpt-c7894.firebasestorage.app",
  messagingSenderId: "68361349763",
  appId: "1:68361349763:web:c4827daec64ceac65b09b6",
  measurementId: "G-Q99Z07NJ3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
