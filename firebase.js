 import firebase from 'firebase/app';
 import "firebase/database";
 
 
// Your web app's Firebase configuration

const firebaseConfig= {
  apiKey: "AIzaSyDRXIMYjZU8G7vJ5uWQY_P71jzmSXLMazo",
  authDomain: "tournamentapp-553d2.firebaseapp.com",
  databaseURL: "https://tournamentapp-553d2.firebaseio.com",
  projectId: "tournamentapp-553d2",
  storageBucket: "tournamentapp-553d2.appspot.com",
  messagingSenderId: "33169946826",
  appId: "1:33169946826:web:54827f90ed4f0aec841c33",
  measurementId: "G-1P8VCZ7T7X"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.database();
// exporting the firebase and the collection
  // export const db = firebase.firestore();
  // export const dbMenuAdd = db.collection('menuItems')