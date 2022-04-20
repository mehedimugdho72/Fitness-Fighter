// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1QELgIPjUZD-092HY7_JZjcaX3vHi0hs",
  authDomain: "fitness-fighter-c557a.firebaseapp.com",
  projectId: "fitness-fighter-c557a",
  storageBucket: "fitness-fighter-c557a.appspot.com",
  messagingSenderId: "1065701716617",
  appId: "1:1065701716617:web:f1e110fdd69b2071b08c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;