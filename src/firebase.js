import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsZm3FrTl0ukplDNtFDuCVUKg3uk6DwRk",
  authDomain: "whatsapp-clone-43e24.firebaseapp.com",
  projectId: "whatsapp-clone-43e24",
  storageBucket: "whatsapp-clone-43e24.appspot.com",
  messagingSenderId: "1005008404573",
  appId: "1:1005008404573:web:e79e0db81f9118cd9bcdb4"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
