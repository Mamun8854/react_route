import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "./mylogo.svg";

const Header = () => {
  const [data, setData] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      <div className="p-4 text-black px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="container flex justify-between align-middle h-14 md:px-9 mx-auto">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <div className="flex">
              <img src={img} alt="" />{" "}
              <h1
                style={{ lineHeight: "20px" }}
                className="ml-2 pt-0.5 font-bold text-sm"
              >
                Improve<br></br>Your Skill
              </h1>
            </div>
          </Link>
          <ul className="items-stretch hidden space-x-8 md:flex md:align-middle">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/home"
                className={({ isActive }) => {
                  return isActive
                    ? "underline text-yellow-400 underline-offset-8 font-medium tracking-wide text-yellow-400 transition-colors duration-200 hover:text-teal-accent-400 py-0.5"
                    : "font-medium tracking-wide text-black  transition-colors duration-200 hover:text-teal-accent-400 py-0.5";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/static"
                className={({ isActive }) => {
                  return isActive
                    ? "underline text-yellow-400   underline-offset-8 font-medium tracking-wide text-yellow-400  transition-colors duration-200 hover:text-teal-accent-400 py-0.5"
                    : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400 py-0.5";
                }}
              >
                Static
              </NavLink>
            </li>

            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/blog"
                className={({ isActive }) => {
                  return isActive
                    ? "underline text-yellow-400   underline-offset-8 font-medium tracking-wide text-yellow-400  transition-colors duration-200 hover:text-teal-accent-400 py-0.5"
                    : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400 py-0.5";
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setData(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {data && (
              <div className="absolute top-0 left-0 w-full text-white">
                <div className="p-4 bg-gray-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="Quiz Of Nation"
                        title="Quiz Of Nation"
                        className="inline-flex items-center"
                      ></NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setData(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="text-center">
                      <li>
                        <NavLink
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide hover:text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/static"
                          className="font-medium tracking-wide hover:text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Statics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className="font-medium tracking-wide hover:text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
