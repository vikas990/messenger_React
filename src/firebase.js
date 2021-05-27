import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDoG73jsSe7FB3UENchNg564UpR9r8K55Y",
  authDomain: "messenger-40ca5.firebaseapp.com",
  projectId: "messenger-40ca5",
  storageBucket: "messenger-40ca5.appspot.com",
  messagingSenderId: "243537607953",
  appId: "1:243537607953:web:a784c172a1234b0f9820b0",
  measurementId: "G-0R4XREH36C",
});

const db = firebaseApp.firestore();

export default db;
