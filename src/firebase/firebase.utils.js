import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMbBHCJMWioue2lmVbUGr75gTtw0rRT-A",
  authDomain: "crwn-db-812ff.firebaseapp.com",
  databaseURL: "https://crwn-db-812ff.firebaseio.com",
  projectId: "crwn-db-812ff",
  storageBucket: "crwn-db-812ff.appspot.com",
  messagingSenderId: "803473684292",
  appId: "1:803473684292:web:1fb902f919d977f0fe4911",
  measurementId: "G-LMN0520449",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
