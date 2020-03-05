import firebase from "firebase";
import "firebase/auth";

/**
 * This is the place where you should put firebase related code
 */

const firebaseConfig = {
    apiKey: "AIzaSyAzR_Ap6sa0hRMDFokA3SMo4jLUIMqHSdc",
    authDomain: "quick-travis-f48a0.firebaseapp.com",
    databaseURL: "https://quick-travis-f48a0.firebaseio.com",
    projectId: "quick-travis-f48a0",
    storageBucket: "quick-travis-f48a0.appspot.com",
    messagingSenderId: "978921059979",
    appId: "1:978921059979:web:0e8a7251bb6b12b1f5068e"
  };

// Initialize firebase
if (!firebase.apps.length) {
    console.log("[Message] Initialize firebase app")
    firebase.initializeApp(firebaseConfig);
}

// Get current user, but if you want to change the user state, please pass setUser in App.js to your component
const getUser = () => {
    return firebase.auth().currentUser
}

// Change the user state when user logged in or logged out
const updateUserState = (setUser) => {
    firebase.auth().onAuthStateChanged(setUser);
}

// Sign out the user
const signOut = () => {
    firebase.auth().signOut()
}

// Sign in with google with a popup window
const signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

export { getUser, signOut, signInWithGoogle, updateUserState}
