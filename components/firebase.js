import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
   const firebaseApp =firebase.initializeApp(firebaseConfig);

  export default firebaseApp;
