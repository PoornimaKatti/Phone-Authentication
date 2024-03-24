// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLaAfHZwMgpFElV0UlZ5LBid-I7QRhB2s",
  authDomain: "otp-project-e90e8.firebaseapp.com",
  projectId: "otp-project-e90e8",
  storageBucket: "otp-project-e90e8.appspot.com",
  messagingSenderId: "932532703292",
  appId: "1:932532703292:web:54351d8423dc69289d7339",
  measurementId: "G-HL17HTYDL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;