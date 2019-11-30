import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


  const firebaseConfig = {
    apiKey: "AIzaSyB9YL6x8mRuqPtzSxnv8Ac3nxO0B8ZKMrU",
    authDomain: "react-slack-69aad.firebaseapp.com",
    databaseURL: "https://react-slack-69aad.firebaseio.com",
    projectId: "react-slack-69aad",
    storageBucket: "react-slack-69aad.appspot.com",
    messagingSenderId: "26011961499",
    appId: "1:26011961499:web:bafbb3af6dd13857aa5e3e"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;