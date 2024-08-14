import React, { useState } from "react";
import "./navbar.css";
import emtechLogo from "../../assets/emtech_logo3.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const [navShow, setNavShow] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");

  const showNavLogin = () => {
    setNavShow(true);
  };

  const hideNavLogin = () => {
    setNavShow(false);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.1.158:8000/api/token/", {
        username: username,
        password: password,
      });
      if (response.data.access && response.data.refresh) {
        console.log("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        localStorage.setItem("username", username);
        localStorage.setItem("refreshToken", response.data.refresh);
        console.log("Refresh Token stored:", localStorage.getItem("refreshToken")); 
        
        setNavShow(false);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };
  
  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        console.log("Found refresh token:", refreshToken);
  
        await axios.post("http://192.168.1.158:8000/api/token/refresh/", {
          refresh: refreshToken,
        });
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("refreshToken");
        setIsLoggedIn(false);
        setUsername("");
        navigate("/");
      } else {
        console.error("No refresh token found");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };  

  return (
    <>
      <nav className="main-nav py-4">
        <div className=" mx-auto px-10">
          <div className="flex items-center flex-wrap justify-between nav-content">
            <img src={emtechLogo} alt="Emtech Logo" />
            {isLoggedIn ? (
              <div>
                <span>Welcome, Eng {username}</span> &nbsp;
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
                onClick={showNavLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${navShow == false
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
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              required
              placeholder="Enter Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              className="bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
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
