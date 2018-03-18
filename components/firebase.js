import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyClTVN_Xh8dkpQNM3wA_1M_Ib59Q6QcFFo",
    authDomain: "uploadimage-26cde.firebaseapp.com",
    databaseURL: "https://uploadimage-26cde.firebaseio.com",
    projectId: "uploadimage-26cde",
    storageBucket: "uploadimage-26cde.appspot.com",
    messagingSenderId: "307457863604"
  };
   const firebaseApp =firebase.initializeApp(firebaseConfig);

  export default firebaseApp;