import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDpWfyoVBdB4IrizkHwZThloQSZeLyG3n4",
    authDomain: "mario-plan-5d410.firebaseapp.com",
    databaseURL: "https://mario-plan-5d410.firebaseio.com",
    projectId: "mario-plan-5d410",
    storageBucket: "mario-plan-5d410.appspot.com",
    messagingSenderId: "102679131749",
    appId: "1:102679131749:web:19185355e4216a448df88c",
    measurementId: "G-61VET562HH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase