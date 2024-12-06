import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEC9uV3-ZLetjjXrWK9nz_RCOrjFyjNlo",
  authDomain: "sign-language-ai-78060.firebaseapp.com",
  projectId: "sign-language-ai-78060",
  storageBucket: "sign-language-ai-78060.firebasestorage.app",
  messagingSenderId: "3221341815",
  appId: "1:3221341815:web:845ca3f45d086a840ee872",
  measurementId: "G-85YKMC51HD"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

