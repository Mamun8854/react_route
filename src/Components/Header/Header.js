import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between mx-6">
      <div>
        <h1 className="text-xl font-extrabold">Improve Your Skill</h1>
      </div>
      <div>
        <nav className="text-lg font-semibold ml-4">
          <Link className="ml-4" to="/home">
            Home
          </Link>
          <Link className="ml-4" to="/static">
            Static
          </Link>
          <Link className="ml-4" to="/blog">
            Blog
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
