import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSZCCwPA3wwSw_GEmWAlQ1gKCynD2Z7Q8',
  authDomain: 'colne-c5ba5.firebaseapp.com',
  projectId: 'colne-c5ba5',
  storageBucket: 'colne-c5ba5.appspot.com',
  messagingSenderId: '594781487755',
  appId: '1:594781487755:web:1038980d73ed99c2760a8e',
  measurementId: 'G-NCN68FS7S3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
