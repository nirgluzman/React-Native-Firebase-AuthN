// React Context for managing the AuthN status
// https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/

import { createContext, useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword, // create a new user with email and password.
  signInWithEmailAndPassword, // sign in with email and password.
  onAuthStateChanged, // authentication state observer and and get user data.
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth';

import { auth } from '../firebaseConfig';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  logIn: () => {}, // sign-in an existing user with email and password
  signUp: () => {}, // create a new user with email and password.
  logOut: () => {}, // clear the AuthN status
  googleSignIn: () => {} // sign-in with google
});

// Provider for the AuthContext
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  async function googleSignIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    await signInWithRedirect(auth, provider);
    return getRedirectResult(auth);
  }

  // set up the auth listener once when the component mounts and maintain it throughout its lifecycle.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Auth', currentUser);
      setUser(currentUser || null); // state is updated with either the currentUser object (if signed in) or null (if not signed in).
    });

    return () => {
      unsubscribe(); // cleanup - to unsubscribe when the component will be unmounted (cleanup mechanism).
    };
  }, []);

  const value = {
    isAuthenticated: !!user,
    user,
    logIn,
    logOut,
    signUp,
    googleSignIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
