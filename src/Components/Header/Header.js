import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "./mylogo.svg";

const Header = () => {
  return (
    <div>
      <div>
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex justify-between h-16 mx-auto">
            <a
              rel="noopener noreferrer"
              to="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <div>
                <img src={img} alt="" />
              </div>
            </a>
            <ul className="items-stretch hidden space-x-3 md:flex">
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/"
                  className={({ isActive }) => {
                    return isActive
                      ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400";
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
                      ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400";
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
                      ? "underline text-sky-500  underline-offset-8 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400";
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
