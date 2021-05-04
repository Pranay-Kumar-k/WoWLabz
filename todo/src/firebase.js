import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBUW_u-QTiVFTj94CpKA6h2xK5NndelIK4",
  authDomain: "todo-98c0e.firebaseapp.com",
  projectId: "todo-98c0e",
  storageBucket: "todo-98c0e.appspot.com",
  messagingSenderId: "504914881808",
  appId: "1:504914881808:web:303c3817ad777672a20995",
  measurementId: "G-V5P3Q6QGFY"
})

export const auth = app.auth()
export default auth