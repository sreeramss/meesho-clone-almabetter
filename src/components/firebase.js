import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhJF8PoF-FLQ_ra6MV9mrcS_r6XopRjzM",
    authDomain: "meesho-clone-e5d33.firebaseapp.com",
    projectId: "meesho-clone-e5d33",
    storageBucket: "meesho-clone-e5d33.appspot.com",
    messagingSenderId: "686619344295",
    appId: "1:686619344295:web:ca6f15d90311b2f4d44a82"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

// Listen to auth state changes to get the userId and store it in local storage
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, get the userId (uid)
    const userId = user.uid;
    // Store it in local storage
    // Comment Needs to be removed  to set id in local storage
    localStorage.setItem("userId", userId);                                            
  } else {
    // User is signed out
    // console.log("No user signed in");
  }
});

export default app;

