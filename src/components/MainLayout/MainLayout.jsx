import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
// import auth from "../Firebase/firebase.config";
// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   signInWithPopup,
//   TwitterAuthProvider,
// } from "firebase/auth";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// export const authContext = createContext();

const MainLayout = () => {
  // const [user, setUser] = useState(null);

  // const googleProvider = new GoogleAuthProvider();
  // const githubProvider = new GithubAuthProvider();
  // const twitterprovider = new TwitterAuthProvider();
  // const handleGoogleLogin = () => {
  //   signInWithPopup(auth, googleProvider).then((result) => setUser(result.user));
  // };
  // const handleGithubLogin = () => {
  //   signInWithPopup(auth, githubProvider).then((result) => setUser(result.user));
  // };
  // const handleTwitterLogin = () => {
  //   signInWithPopup(auth, twitterprovider).then((result) =>
  //     setUser(result.user)    );
  // };

  // const authData = {
  //   handleGithubLogin,
  //   handleGoogleLogin,
  //   handleTwitterLogin,
  //   user,
  //   setUser,
  // };
  return (
    <div>
      {/* <authContext.Provider value={authData}> */}
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      {/* </authContext.Provider> */}
    </div>
  );
};

export default MainLayout;
