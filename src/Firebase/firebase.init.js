// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6L2AlqO3rq6GS0GtL8Bz7E7q4ClxvhvY",
  authDomain: "hostel-meal-system-91762.firebaseapp.com",
  projectId: "hostel-meal-system-91762",
  storageBucket: "hostel-meal-system-91762.firebasestorage.app",
  messagingSenderId: "561924210171",
  appId: "1:561924210171:web:86a4441d6440d23f6edf5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);