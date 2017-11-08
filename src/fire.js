import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDNZ_67ZUbTI-rlAOO2iMEW8R20L5Lecf0",
    authDomain: "newtab-1b9ae.firebaseapp.com",
    databaseURL: "https://newtab-1b9ae.firebaseio.com",
    projectId: "newtab-1b9ae",
    storageBucket: "newtab-1b9ae.appspot.com",
    messagingSenderId: "609154156773"
};
var fire = firebase.initializeApp(config);
export default fire;