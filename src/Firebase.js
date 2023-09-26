import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCa_ofcRqJ5zDjJO_6C8ZzU-PrPjsGoZ9Q",
    authDomain: "instahere-550eb.firebaseapp.com",
    projectId: "instahere-550eb",
    storageBucket: "instahere-550eb.appspot.com",
    messagingSenderId: "838706635088",
    appId: "1:838706635088:web:41f6f93903bc18a8048c55"
  };

  
  const app = firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const storage=firebase.storage();
  const db=app.firestore();


export { auth,db,storage }