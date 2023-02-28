// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB53Je6xRDJEohNFZuDtZR280iPTs2UuqQ",
    authDomain: "next-musicatolia-eccbc.firebaseapp.com",
    projectId: "next-musicatolia-eccbc",
    storageBucket: "next-musicatolia-eccbc.appspot.com",
    messagingSenderId: "412223596878",
    appId: "1:412223596878:web:f645d777413cfa45c5d61f",
    measurementId: "G-T8R559H3GQ"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;