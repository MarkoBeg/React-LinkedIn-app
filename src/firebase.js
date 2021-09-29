import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0EJ035UdtPfU6qCUa7mkLChiDXsbuBWk",
  authDomain: "linkedin-me.firebaseapp.com",
  projectId: "linkedin-me",
  storageBucket: "linkedin-me.appspot.com",
  messagingSenderId: "209097275372",
  appId: "1:209097275372:web:7c507f3ab97019ca7d32c9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //this line of code connects to our database
const db = firebaseApp.firestore(); //odi na firebase App i dohvati firestore()
const auth = firebase.auth(); //autentifikacija za login

export { db, auth };
