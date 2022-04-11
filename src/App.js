import logo from './logo.svg';
import './App.css';

//gestion des routes, des pages et de la navigation
import {Routes, Route, Switch} from 'react-router-dom';
import Navbar from "./Pages/Components/Navbar";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


//import pour firebase ui
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// ajout et initialisation app firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />  
      </Routes>
    </>
  );
}

export default App;
