import React from "react";

const Register = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-green-600 text-center border-b-2 my-5 pb-3">
        REGISTER
      </h1>
      <form className="ml-24 mx-auto" action="">
        <div>
          <h1 className="font-bold text-2xl  my-3"> Name</h1>
          <input
            type="text"
            name=" name"
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
            name="first name"
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
      </form>
    </div>
  );
};

export default Register;
