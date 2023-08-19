import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDWoRsUWR4XnfQYu9bHGd6enYQ65Aqcfgw",
    authDomain: "react-disney-vb.firebaseapp.com",
    projectId: "react-disney-vb",
    storageBucket: "react-disney-vb.appspot.com",
    messagingSenderId: "549352942766",
    appId: "1:549352942766:web:f1fa482fca3dd61bf7113f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
