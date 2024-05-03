import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9P6g3Oe2xDXYG6mPFmxFtoWmaEWIdW3Y",
    authDomain: "segpucpr.firebaseapp.com",
    databaseURL: "https://segpucpr-default-rtdb.firebaseio.com",
    projectId: "segpucpr",
    storageBucket: "segpucpr.appspot.com",
    messagingSenderId: "500386427112",
    appId: "1:500386427112:web:ee2088c051a9be44c2195d",
    measurementId: "G-62Z5SN7DW3"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;