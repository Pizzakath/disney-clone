import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRUUAcyjt30iEq1rPezQFy03jIk-fo9MQ",
  authDomain: "disneyplus-clone-4b9fb.firebaseapp.com",
  projectId: "disneyplus-clone-4b9fb",
  storageBucket: "disneyplus-clone-4b9fb.appspot.com",
  messagingSenderId: "803897211874",
  appId: "1:803897211874:web:662aa34f5e21d3156157bb"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;