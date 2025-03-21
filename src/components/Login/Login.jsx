import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleGoogleLogin, handeLogin } = useContext(authContext);
  // console.log(contextValue);

  const handleLoginButtn = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    
    console.log(
      firstName,
      lastName,
      email,
      photo,
      password,
      address,
      confirmPassword
    );

    handeLogin(email, password);
  };

  return (
    <div className="ml-24 my-5 mx-auto  items-center">
      {/* Title */}
      <h1 className="font-bold text-4xl text-blue-600 text-center border-b-2 my-5 pb-3">
        LOGIN & REGISTER
      </h1>

      <Link to="/register">
        <h1 className="font-bold text-2xl text-red-500">
          Are you new in my website ? Please Registration...{" "}
        </h1>
        <button className="btn btn-outline my-5 mx-5">Register</button>
      </Link>
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Google Login
      </button>

      <div>
        <h1 className="font-bold text-2xl  my-3">First Name</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input input-ghost"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl  my-3">Last Name</h1>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input input-ghost"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl my-3">Email</h1>
        <input
          type="email"
          name="email"
          placeholder="Type here your email"
          className="input input-ghost"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl  my-3">Address</h1>
        <input
          type="text"
          name="address"
          placeholder="Type here your address "
          className="input input-ghost"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl  my-3">Password</h1>
        <input
          type="password"
          name="password"
          placeholder="Type here your password"
          className="input input-ghost"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl my-3">Confirm Password</h1>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Make sure your password"
          className="input input-ghost"
        />
      </div>
      <div className="flex gap-5">
        <button onClick={handleLoginButtn} className="btn btn-primary my-5">
          Login
        </button>
        <Link to="/">
          <button className="btn btn-outline my-5">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
