import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "linkedin-clone-212da.firebaseapp.com",
    projectId: "linkedin-clone-212da",
    storageBucket: "linkedin-clone-212da.appspot.com",
    messagingSenderId: "60840721679",
    appId: "1:60840721679:web:a00b289a712d9ba0e1127a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db  = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };