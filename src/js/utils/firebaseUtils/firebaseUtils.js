import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCz90Er4zWD_VCqRyoeggQzWoCxSEt6U8E",
    authDomain: "rpgjas.firebaseapp.com",
    databaseURL: "https://rpgjas.firebaseio.com",
    projectId: "rpgjas",
    storageBucket: "rpgjas.appspot.com",
    messagingSenderId: "232409734940",
    appId: "1:232409734940:web:30c4b714658d36db62e4d9",
    measurementId: "G-R92VTP1783"
  };
  // Initialize Firebase
  export const firebaseImpl = firebase.initializeApp(firebaseConfig);
  export const firebaseDatabase = firebase.analytics();