// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn8kcGWWoDsTnUrDRNnWDpvTp6fUgXbQI",
  authDomain: "task-manager-dda59.firebaseapp.com",
  projectId: "task-manager-dda59",
  storageBucket: "task-manager-dda59.appspot.com",
  messagingSenderId: "103788784935",
  appId: "1:103788784935:web:e237e592ee338490098d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 // Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);