import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyDYJIKN3yQoogaNYxpICy3B8t87dYoEBNc",
    authDomain: "ace-website-fd278.firebaseapp.com",
    databaseURL: "https://ace-website-fd278-default-rtdb.firebaseio.com",
    projectId: "ace-website-fd278",
    storageBucket: "ace-website-fd278.appspot.com",
    messagingSenderId: "324077971707",
    appId: "1:324077971707:web:b8aa3466e43f2272bd285e"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;