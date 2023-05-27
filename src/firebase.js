// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfmYEZCjHiOp1qIJD_H_d2gZF4ClfRvaI",
  authDomain: "dashboard-reactjs-project.firebaseapp.com",
  projectId: "dashboard-reactjs-project",
  storageBucket: "dashboard-reactjs-project.appspot.com",
  messagingSenderId: "1098030674819",
  appId: "1:1098030674819:web:f55ce08983cb8e463bfcb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);