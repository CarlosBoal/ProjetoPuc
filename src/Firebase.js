import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZkxPCAdVkJRX-iBwBvDGV6h-OH7qENb0",
  authDomain: "projetoreact-ccf1b.firebaseapp.com",
  projectId: "projetoreact-ccf1b",
  storageBucket: "projetoreact-ccf1b.appspot.com",
  messagingSenderId: "267886011134",
  appId: "1:267886011134:web:baa4c173560dc34d82bbaf"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;