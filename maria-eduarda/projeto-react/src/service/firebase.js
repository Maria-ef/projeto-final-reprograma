// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCESOwymaPEA5KzgFKn3qfLecNaUv_Eh2o",
  authDomain: "projeto-final-reprograma-110cc.firebaseapp.com",
  projectId: "projeto-final-reprograma-110cc",
  storageBucket: "projeto-final-reprograma-110cc.appspot.com",
  messagingSenderId: "47485766362",
  appId: "1:47485766362:web:6a848a424790f1f7dc73e3",
  measurementId: "G-8QC8D7G3V9",
  databaseURL:"https://projeto-final-reprograma-110cc-default-rtdb.firebaseio.com"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase()

export default database;