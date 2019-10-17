import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyDVXcuIYIcwPvEWXK5f1N5wC-aRoaLAZrk",
    authDomain: "panel-bae3e.firebaseapp.com",
    databaseURL: "https://panel-bae3e.firebaseio.com",
    projectId: "panel-bae3e",
    storageBucket: "",
    messagingSenderId: "764697494812",
    appId: "1:764697494812:web:e4077e25be034f71e466d9",
    measurementId: "G-W53327G09Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()

  export{
      firebase,
      auth,
      db,
      storage,
      functions
  }