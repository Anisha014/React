// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCtcNpMyYjFQN9yhiPLMT380TJr1wIrjqU",
  authDomain: "intern-5d3c9.firebaseapp.com",
  projectId: "intern-5d3c9",
  storageBucket: "intern-5d3c9.appspot.com",
  messagingSenderId: "1063975412559",
  appId: "1:1063975412559:web:28a53104880c13f7fa5b3a",
  measurementId: "G-VZ3SFWK9FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};