// import { useNavigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

//新增：
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// import {getFirestore, addDoc, collection} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);

//新增：export auth
export const auth = getAuth(app);
//新增：export provide(for what)
export const provide = new GoogleAuthProvider();

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
    // await addDoc(collection(db, "users"), {
    //   user: user.uid,
    //   email: user.email,
    // })
    // return true
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
