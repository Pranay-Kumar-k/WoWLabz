import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAcNO4coJp88Q7YI9XbWcQW2ydSpSLoAns",
    authDomain: "todo-app-1041d.firebaseapp.com",
    projectId: "todo-app-1041d",
    storageBucket: "todo-app-1041d.appspot.com",
    messagingSenderId: "528676283269",
    appId: "1:528676283269:web:712dfb9914e0b6d9881aec",
    measurementId: "G-GWWQ5QZ59F"
})

const db = app.firestore();
const auth = firebase.auth();
export const google = new firebase.auth.GoogleAuthProvider();

export {db,auth}