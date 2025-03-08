import React from 'react';
import { useState } from "react";  
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import {auth, provider } from '../Firebase/firebase.config';
 

const AuthComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
  
    const register = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const login = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const logout = async () => {
      try {
        await signOut(auth);
        setUser(null);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const googleLogin = async () => {
      try {
        const userCredential = await signInWithPopup(auth, provider);
        setUser(userCredential.user);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    return (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn btn-outline ' onClick={register}>Register</button>
          <button className='btn btn-outline ' onClick={login}>Login</button>
          <button className='btn btn-outline ' onClick={logout}>Logout</button>
          <button className='btn btn-outline ' onClick={googleLogin}>Login with Google</button>
          {user && <p>Welcome, {user.email}</p>}
        </div>
      );
};

export default AuthComponent;
