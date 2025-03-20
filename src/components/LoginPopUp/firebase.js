// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv1XkGRmMnJ1V89KZM0YEALeQ2mIO5zDo",
  authDomain: "authentication-6ae17.firebaseapp.com",
  projectId: "authentication-6ae17",
  storageBucket: "authentication-6ae17.firebasestorage.app",
  messagingSenderId: "447658878655",
  appId: "1:447658878655:web:bd49aaffc5f914669cc80a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()

