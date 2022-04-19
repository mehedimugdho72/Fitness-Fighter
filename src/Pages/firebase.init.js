// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZxcXiQVt7hui-hHASDmO-tbl9xyVcHPE",
    authDomain: "power-zone-d77bd.firebaseapp.com",
    projectId: "power-zone-d77bd",
    storageBucket: "power-zone-d77bd.appspot.com",
    messagingSenderId: "605369002153",
    appId: "1:605369002153:web:e73713a1a2f33b4a5d21b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;