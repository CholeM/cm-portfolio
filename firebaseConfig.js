// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhYefpv6MPvhslpRjZv4cRYCglPXhQSUs",
  authDomain: "cm-portfolio-b2d1a.firebaseapp.com",
  projectId: "cm-portfolio-b2d1a",
  storageBucket: "cm-portfolio-b2d1a.appspot.com",
  messagingSenderId: "246993223057",
  appId: "1:246993223057:web:ebc64ee43a651f1ba12e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);