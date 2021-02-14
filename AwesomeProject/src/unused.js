import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyDmuDhTorSk_r5FerHgVaW5kLfJkXPbm1A',
  authDomain: 'medicos-histology.firebaseapp.com',
  databaseURL: 'https://medicos-histology.firebaseio.com',
  projectId: 'medicos-histology',
  storageBucket: 'gs://medicos-histology.appspot.com',
  messagingSenderId: '200806723835',
  appId: '1:200806723835:android:9da564bcd6c224f3e8005e',
  //   measurementId: 'xxxxxxxxxxxxxxxx',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
