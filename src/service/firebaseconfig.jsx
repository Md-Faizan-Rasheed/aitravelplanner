// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAseXDLOVVKzDgcaCPlFhYbys3rEZN-suI",
  authDomain: "aitravelplanner-b8708.firebaseapp.com",
  projectId: "aitravelplanner-b8708",
  storageBucket: "aitravelplanner-b8708.firebasestorage.app",
  messagingSenderId: "960582401726",
  appId: "1:960582401726:web:a936b5980a6f8f1683e8ef",
  measurementId: "G-D0YR8KFQDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);