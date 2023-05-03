// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsdrCA00pdRSzU0fWGNUuV0t71CAzO_LM",
  authDomain: "jquizcomment1.firebaseapp.com",
  databaseURL: "https://jquizcomment1.firebaseio.com",
  projectId: "jquizcomment1",
  storageBucket: "jquizcomment1.appspot.com",
  messagingSenderId: "665208706145",
  appId: "1:665208706145:web:ec1001c509f4c5e4508620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;