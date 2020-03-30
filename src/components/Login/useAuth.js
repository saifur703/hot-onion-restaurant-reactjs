import { useState } from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import 'firebase/auth';

// Firebase Initialize
firebase.initializeApp(firebaseConfig);

// Authentication
const useAuth = () => {
  // State
  const [user, setUser] = useState(null);

  // Sign In With Google
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email };
        setUser(signedInUser);
        return res.user;
      })
      .catch(err => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };

  // sign in with email password
  const signInWithEmailPass = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      });
  };

  // Sign Out
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        console.log(res);
        setUser(null);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    user,
    signInWithEmailPass,
    signInWithGoogle,
    signOut
  };
};

export default useAuth;
