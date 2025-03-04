// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA5Ibu49F5LuCvQzSVLqhGUCu7YuARRKM",
  authDomain: "fir-conceptual-01.firebaseapp.com",
  projectId: "fir-conceptual-01",
  storageBucket: "fir-conceptual-01.firebasestorage.app",
  messagingSenderId: "895102737290",
  appId: "1:895102737290:web:9c2e6816bd787f5a068673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Extra Line for ready the project: 
const auth = getAuth(app)
export default auth;
//  