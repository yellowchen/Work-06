import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYQv7Jf8Qpc-GejbRVo6Lz0fFSDJQCAzM",
  authDomain: "react-auth-b8add.firebaseapp.com",
  projectId: "react-auth-b8add",
  storageBucket: "react-auth-b8add.firebasestorage.app",
  messagingSenderId: "162050060671",
  appId: "1:162050060671:web:0c5a03d16eb28308d8ea4a",
  measurementId: "G-2L78E48KFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//新增：Initialize Firebase Authentication 
export const auth = getAuth(app);

//新增：宣告 Google Provider & can select account
export const provide = new GoogleAuthProvider().setCustomParameters({prompt: "select_account"});


//signup
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user);
  }catch (err) {
    return {error: err.message}
  }
};

//signin
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    // return true
  }catch (err) {
    return {error: err.message}
  }
};
