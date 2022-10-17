import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDBVbwV51nWpKHllnchGDMulD71poKqgL0',
  authDomain: 'personalportfolio-a6a36.firebaseapp.com',
  projectId: 'personalportfolio-a6a36',
  storageBucket: 'personalportfolio-a6a36.appspot.com',
  messagingSenderId: '989245590775',
  appId: '1:989245590775:web:ff1272d6b6135fb8ad17f2',
};

//	Initialize Firebase
firebase.initializeApp(firebaseConfig);

//	Initialize services
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

export { projectFirestore, projectStorage };
