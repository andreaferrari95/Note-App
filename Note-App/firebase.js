// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5hX9nE2ZwHEixf55xF9Luif48E6TtwKk",
  authDomain: "react-notes-d79eb.firebaseapp.com",
  projectId: "react-notes-d79eb",
  storageBucket: "react-notes-d79eb.appspot.com",
  messagingSenderId: "506501250231",
  appId: "1:506501250231:web:58e41e6b66644d1d57a132",
  measurementId: "G-EGXT9FDHGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const notesCollection = collection(dataBase, "notes");
//const analytics = getAnalytics(app);
