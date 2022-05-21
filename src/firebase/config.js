import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyDnS_gZNOv_vnCM0yOZo1zDI_Nr-6jWdbk",
    authDomain: "todo-image-c5eff.firebaseapp.com",
    projectId: "todo-image-c5eff",
    storageBucket: "todo-image-c5eff.appspot.com",
    messagingSenderId: "346284388555",
    appId: "1:346284388555:web:6da42b09d29d1dd86fab4e"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore,projectStorage,timestamp };