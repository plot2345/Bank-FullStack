import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCApOsCqsU-k8m8-c17tGwYD-CcfHnoBYE",
  authDomain: "banking-data-df1e5.firebaseapp.com",
  projectId: "banking-data-df1e5",
  storageBucket: "banking-data-df1e5.appspot.com",
  messagingSenderId: "16550603014",
  appId: "1:16550603014:web:014f2a44be30a442dc9687",
  measurementId: "G-C4SM1B7KT6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };