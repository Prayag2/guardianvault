// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyYfSL_5iKA50JPni4DT4unbJiOXEZ_vU",
  authDomain: "guardian-vault-codestrikers.firebaseapp.com",
  projectId: "guardian-vault-codestrikers",
  storageBucket: "guardian-vault-codestrikers.appspot.com",
  messagingSenderId: "1042418073895",
  appId: "1:1042418073895:web:18962ccb880c91ab4c6902",
  measurementId: "G-GME1B7S6BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);