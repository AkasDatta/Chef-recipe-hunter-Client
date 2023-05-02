// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN6rvprpqCpcDNzlOR5XC5j4JnZCTKNyc",
  authDomain: "chef-recipe-hunter-1a993.firebaseapp.com",
  projectId: "chef-recipe-hunter-1a993",
  storageBucket: "chef-recipe-hunter-1a993.appspot.com",
  messagingSenderId: "1065672931264",
  appId: "1:1065672931264:web:61719f70af9211ce483a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;