import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mini Blog</h1>
      <div>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Create
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Categories
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
