import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import emtechLogo from "../../assets/emtech_logo3.jpg";
const MainNavbar = () => {
  const [navShow, setNavShow] = useState(false);

  const showNavLogin = () => {
    setNavShow(true);
  };
  const hideNavLogin = () => {
    setNavShow(false);
  };
  return (
    <>
      <nav className="main-nav py-4">
        <div className=" mx-auto px-10">
          <div className="flex items-center flex-wrap justify-between nav-content">
            <img src={emtechLogo} alt="Emtech Logo" />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
              onClick={showNavLogin}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          navShow == false
            ? "scale-hidden dropdown-login"
            : "scale-show dropdown-login"
        }`}
      >
        <button className="nav-close font-bold hvr-pop" onClick={hideNavLogin}>
          x
        </button>
        <p>
          Welcome to <span>EMTech Dashboard</span>
        </p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 mx-auto hvr-pulse hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default MainNavbar;
