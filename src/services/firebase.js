import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey:"AIzaSyAbjA43pVUkNvZ7G1llq7vxbK7d-V89UrQ",
  authDomain:"phone-auth-f076e.firebaseapp.com",
  projectId:"phone-auth-f076e",
  storageBucket:"phone-auth-f076e.appspot.com",
  messagingSenderId:"684257596310",
  appId:"1:684257596310:web:a93eda36add6e29bb503b7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

