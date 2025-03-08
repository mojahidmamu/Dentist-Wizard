import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
// import auth from "../Firebase/firebase.config";
export const authContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterprovider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    // .then((result) =>
    //   setUser(result.user)
    // );
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result) =>
      setUser(result.user)
    );
  };

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterprovider).then((result) =>
      setUser(result.user)
    );
  };

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const handeLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogOUt = () => {
    signOut(auth);
  };

  const authInfo = {
    handeLogin,
    handleLogOUt,
    handleRegister,
    handleGithubLogin,
    handleGoogleLogin,
    handleTwitterLogin,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      return () => {
        unsubscribe()
      };
    });
  }, []);

  //   console.log(props);
  return (
    <div>
      <authContext.Provider value={authInfo}>
        {props.route}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
