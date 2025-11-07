import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/image/logo.png";

const Navbar = () => {
  const links = (
    <>
      {/* <NavLink to='/'>Home</NavLink> */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/apps">Apps</Link>
      </li>
      <li>
        <Link to="/installation">Installation</Link>
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
        <a className="btn btn-ghost text-xl">
          <div className="flex items-center gap-3">
            <img className="h-8 w-auto" src={logo} alt="" />
            <h3 className="font-bold uppercase" style={{ color: "#632EE3" }}>
              Hero.IO
            </h3>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-end">
          <a
            className="btn text-white mr-3"
            style={{ backgroundColor: "#632EE3" }}
          >
            Contribute
          </a>
        </div>
        <Link to="/login">
          <a className="btn btn-outline">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
