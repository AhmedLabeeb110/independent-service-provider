// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGtu--4AxnAKQjQ-dopx6OsTKfPnwgDg",
  authDomain: "independent-service-prov-6f0f2.firebaseapp.com",
  projectId: "independent-service-prov-6f0f2",
  storageBucket: "independent-service-prov-6f0f2.appspot.com",
  messagingSenderId: "965413573498",
  appId:"1:965413573498:web:6e377a8e7b9c5382c7fcc3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
