// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp71hl-IFf0z1ulAjvljrcNfq5R1qmZwQ",
  authDomain: "inventorymanagement-3ddf6.firebaseapp.com",
  projectId: "inventorymanagement-3ddf6",
  storageBucket: "inventorymanagement-3ddf6.appspot.com",
  messagingSenderId: "676038505381",
  appId: "1:676038505381:web:6fa637f20a8ed9b3d1ae4c",
  measurementId: "G-QZXHT9HV3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
