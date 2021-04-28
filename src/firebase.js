import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-x6cFolWJGHWwxgmxAp4CdDFGEDsiBy8",
  authDomain: "ui-f5b19.firebaseapp.com",
  projectId: "ui-f5b19",
  storageBucket: "ui-f5b19.appspot.com",
  messagingSenderId: "921614052644",
  appId: "1:921614052644:web:9d9799108c4e7e11af57b1",
  measurementId: "G-96X7RDGG3W",
});

const auth = firebase.auth();

export { auth };
