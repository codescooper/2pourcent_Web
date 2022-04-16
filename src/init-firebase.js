// ajout  et initialisation app firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//conexion à l'emulateur locale de firebase
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmlD6JHPSBYHfINtPSwTwRBUw1yJmSyq4",
  authDomain: "deuxpourcent.firebaseapp.com",
  projectId: "deuxpourcent",
  storageBucket: "deuxpourcent.appspot.com",
  messagingSenderId: "592243999685",
  appId: "1:592243999685:web:7d838b67024c31edf601ac",
  measurementId: "G-VV1KSF2DFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebaseApps previously initialized using initializeApp()
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);