// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeCs3r5Y0E4bdj5rS1aX0lkRLbmp4EXek",
    authDomain: "hotelsverige.firebaseapp.com",
    databaseURL: "https://hotelsverige-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hotelsverige",
    storageBucket: "hotelsverige.appspot.com",
    messagingSenderId: "891878740866",
    appId: "1:891878740866:web:542c1e3f662d544ab3b59b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const db = getDatabase(app);