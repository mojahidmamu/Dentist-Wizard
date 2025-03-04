import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      {/* <NavLink to='/'>Home</NavLink> */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/AllTreatments">All Treatments</Link>
      </li>
      <li>
        <Link to="/myAppoinments">My appoinments</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">TEETH WIZARD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <a className="btn btn-outline">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
