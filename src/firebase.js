// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx491IFThnykPJtJlsU1qTL3mixfnKvYg",
  authDomain: "store-b59ee.firebaseapp.com",
  projectId: "store-b59ee",
  storageBucket: "store-b59ee.firebasestorage.app",
  messagingSenderId: "1036914538724",
  appId: "1:1036914538724:web:210170213e4ee1ed1a14f1",
  measurementId: "G-DZJ0ZPDR22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
