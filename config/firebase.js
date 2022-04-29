// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';


// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDhX1JG0oyJpUcMgu59Ukv32LSvebcHfhU",
  authDomain: "levelup_52aee.firebaseapp.com",
  projectId: "levelup_52aee",
  storageBucket: "levelup_52aee.appspot.com",
  messagingSenderId: "1037769501312",
  appId: "1:1037769501312:web:6b332b29b4e51d5cf09465",
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);





// export default firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// };