import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGHt0YpfHQvG_S80kIp8DbckYo9dFTTxM",
  authDomain: "netflix-clone-f1273.firebaseapp.com",
  projectId: "netflix-clone-f1273",
  storageBucket: "netflix-clone-f1273.appspot.com",
  messagingSenderId: "477673481353",
  appId: "1:477673481353:web:6ba48a334a4ae58186d258"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };