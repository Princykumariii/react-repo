// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1IAz30o-j7RvXkrunP-ALRS7M6GMMS6g",
  authDomain: "my-library-b8dc4.firebaseapp.com",
  projectId: "my-library-b8dc4",
  storageBucket: "my-library-b8dc4.firebasestorage.app",
  messagingSenderId: "357445496421",
  appId: "1:357445496421:web:bb17cb7126f81f6411e08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;