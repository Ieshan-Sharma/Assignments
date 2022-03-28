// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn6QCbUqdGBxo2uDk4vSo3PAcdPwOeY_E",
  authDomain: "dashboard-20df4.firebaseapp.com",
  databaseURL: "https://dashboard-20df4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dashboard-20df4",
  storageBucket: "dashboard-20df4.appspot.com",
  messagingSenderId: "916601929453",
  appId: "1:916601929453:web:38ba4b9f3dd0b02ee256e4",
  measurementId: "G-12GXTCNDEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }