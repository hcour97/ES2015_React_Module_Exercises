import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/chips">
        Chip
      </Link>
      <Link to="/chocolate">
        Chocolate
      </Link>
      <Link to="/gatorade">
        Gatorade
      </Link>
      <Link to="/home">
        Home
      </Link>
    </nav>
  );
}

export default NavBar;