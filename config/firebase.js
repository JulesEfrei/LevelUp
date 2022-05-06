// Import the functions you need from the SDKs you need
import 'firebase/auth';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getFirestore } from '@firebase/firestore';


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhX1JG0oyJpUcMgu59Ukv32LSvebcHfhU",
  authDomain: "levelup-52aee.firebaseapp.com",
  databaseURL: "https://levelup-52aee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "levelup-52aee",
  storageBucket: "levelup-52aee.appspot.com",
  messagingSenderId: "1037769501312",
  appId: "1:1037769501312:web:6b332b29b4e51d5cf09465"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export const auth = getAuth(Firebase)
export const db = getFirestore(Firebase)





// export default firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// };