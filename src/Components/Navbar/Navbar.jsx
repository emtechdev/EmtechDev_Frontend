import React, { useState } from "react";
import "./navbar.css";
import emtechLogo from "../../assets/emtech_logo3.jpg";
import axios from "axios";

const MainNavbar = () => {
  const [navShow, setNavShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const showNavLogin = () => {
    setNavShow(true);
  };

  const hideNavLogin = () => {
    setNavShow(false);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("", {
        email: email,
        password: password,
      });
      if (response.data.success) {
        console.log("Login successful");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
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
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => {
            e.preventDefault(); 
            handleLogin(); 
          }}
        >
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
              type="email"
              required
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 mx-auto hvr-pulse hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
