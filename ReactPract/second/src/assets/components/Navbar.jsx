import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {  // boostrap
  return (
    <div>
      <style>
        {`
          .nav-link {
            color: white !important;
          }
        `}
      </style>
      <nav className="navbar navbar-expand-sm navbar-black bg-black">
        <div className="container">
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
