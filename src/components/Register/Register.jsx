import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {handleRegister, handleLogOUt} = useContext(authContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    
    console.log(name, email, photo, password, conPassword);

    handleRegister(email, password )
    handleLogOUt(auth )
  };
  return (
    <div>
      <h1 className="font-bold text-4xl text-green-600 text-center border-b-2 my-5 pb-3">
        REGISTER
      </h1>
      <form onSubmit={handleSubmit} className="ml-24 mx-auto" action="">
        <div>
          <h1 className="font-bold text-2xl  my-3"> Name</h1>
          <input
            type="text"
            name="name"
            placeholder=" Name"
            className="input input-ghost"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl  my-3">Email</h1>
          <input
            type="email"
            name="email"
            placeholder="Email "
            className="input input-ghost"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl  my-3">Photo URL</h1>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-ghost"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl  my-3">Password</h1>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-ghost"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl  my-3">Confirm Password</h1>
          <input
            type="password"
            name="conPassword"
            placeholder="Confirm Password"
            className="input input-ghost"
          />
        </div>
        <button type="submit" className="btn btn-secondary my-3">
          Regitar
        </button>
        <button onClick={handleLogOUt} className="btn btn-primary mx-3">Logout</button>
      </form>
    </div>
  );
};

export default Register;
