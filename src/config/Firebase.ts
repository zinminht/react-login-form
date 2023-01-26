// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4pNC5dv4iW6mDidEoSceg8f8CfWRgHyc",
  authDomain: "react-project-93805.firebaseapp.com",
  projectId: "react-project-93805",
  storageBucket: "react-project-93805.appspot.com",
  messagingSenderId: "591374303674",
  appId: "1:591374303674:web:30972ecd64d8a9560d1d83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
