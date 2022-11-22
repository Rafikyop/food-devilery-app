// Import the functions you need from the SDKs you need
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA7WGvskxwWTigbu7QBeg0T662NYfk0Lw",
  authDomain: "crud-completo-d6b8b.firebaseapp.com",
  projectId: "crud-completo-d6b8b",
  storageBucket: "crud-completo-d6b8b.appspot.com",
  messagingSenderId: "896343390984",
  appId: "1:896343390984:web:c1ff77482e949873b74abd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
// const analytics = getAnalytics(app);
