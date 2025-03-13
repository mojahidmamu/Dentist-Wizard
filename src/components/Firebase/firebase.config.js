// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Add GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA5Ibu49F5LuCvQzSVLqhGUCu7YuARRKM",
  authDomain: "fir-conceptual-01.firebaseapp.com",
  projectId: "fir-conceptual-01",
  storageBucket: "fir-conceptual-01.appspot.com", // FIXED storageBucket
  messagingSenderId: "895102737290",
  appId: "1:895102737290:web:9c2e6816bd787f5a068673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Make sure this import exists

export { auth, provider };
