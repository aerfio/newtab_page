import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "your key",
    authDomain: "newtab-1b9ae.firebaseapp.com",
    databaseURL: "https://newtab-1b9ae.firebaseio.com",
    projectId: "newtab-1b9ae",
    storageBucket: "newtab-1b9ae.appspot.com",
    messagingSenderId: "sth"
};
var fire = firebase.initializeApp(config);
export default fire;
