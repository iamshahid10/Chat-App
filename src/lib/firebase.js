import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-8953e.firebaseapp.com",
//   projectId: "reactchat-8953e",
//   storageBucket: "reactchat-8953e.appspot.com",
//   messagingSenderId: "989490756392",
//   appId: "1:989490756392:web:9e54e92c7b39c531b82e1d"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAj2gDozN8GxsVzJd7jSy_rk0Z5Ykk2yUk",
  authDomain: "chat-app-49cf1.firebaseapp.com",
  projectId: "chat-app-49cf1",
  storageBucket: "chat-app-49cf1.appspot.com",
  messagingSenderId: "399539891912",
  appId: "1:399539891912:web:f7c34fc3a99178d1fafffd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()