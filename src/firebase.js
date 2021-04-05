import firebase from 'firebase/app';
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

export const initiaLizeFireBase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyB2kYGsnYDbIMx1L7KYQRcGYzld5uXuV_U',
    authDomain: 'objectdetection-59bb8.firebaseapp.com',
    projectId: 'objectdetection-59bb8',
    storageBucket: 'objectdetection-59bb8.appspot.com',
    messagingSenderId: '809514119595',
    appId: '1:809514119595:web:708e1d390276c3eda222ee',
    measurementId: 'G-KHH15Q634R'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};
