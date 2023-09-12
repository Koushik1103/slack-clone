import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAUzeyjQ8dNYExQJ7Ib9JIw7cG12IgsQw",
  authDomain: "slack-clone-65bdd.firebaseapp.com",
  projectId: "slack-clone-65bdd",
  storageBucket: "slack-clone-65bdd.appspot.com",
  messagingSenderId: "933519727240",
  appId: "1:933519727240:web:d7364c52be1db742565d3d",
  measurementId: "G-TTNYFZC3KJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  auth,
  provider,
}; /*while importing import { db, auth, provider } from "./firebase"; */
export default db; /*while importing import db from "./firebase"; */
