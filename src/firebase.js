import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-MHkFlIl633DEJ_zYWTIbTa09ki5Uxyw",
    authDomain: "clone-9584a.firebaseapp.com",
    projectId: "clone-9584a",
    storageBucket: "clone-9584a.appspot.com",
    messagingSenderId: "514216957017",
    appId: "1:514216957017:web:030946bd6076022ccf8d48",
    measurementId: "G-7LK02J5DT9"
});

const  auth=firebase.auth();
export default auth
