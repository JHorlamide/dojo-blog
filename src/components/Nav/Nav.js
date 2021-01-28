import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <h1 className="animate__animated animate__bounce">The Dojo blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" id="new_blog">
          New blog
        </Link>
      </div>
    </div>
  );
};

export default Nav;
