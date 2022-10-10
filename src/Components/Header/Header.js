import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "./mylogo.svg";

const Header = () => {
  return (
    <div>
      <div>
        <header className="p-4 bg-white text-black">
          <div className="container flex justify-between align-middle h-14 mx-auto">
            <a
              rel="noopener noreferrer"
              to="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <div className="flex">
                <img src={img} alt="" />{" "}
                <h1
                  style={{ lineHeight: "20px" }}
                  className="ml-2 pt-0.5 font-bold text-lg"
                >
                  Improve<br></br>Your<br></br>Skill
                </h1>
              </div>
            </a>
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
            <button className="flex justify-end p-4 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
