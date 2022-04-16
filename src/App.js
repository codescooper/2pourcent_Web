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
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

//firebase
import "./init-firebase";
//google auth provider ( gere le flux de connection ave le sdk firebae)
import "./auth-service-provider"
//ecoute si l'etat de connection de l'utilisateur change
import "./auth-state-listener";

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
