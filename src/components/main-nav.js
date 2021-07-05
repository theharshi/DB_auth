import { NavLink } from "react-router-dom";
import React from "react";
import "../css/home.css";
const MainNav = () => (
  <div className="navbar-nav mr-auto">
    {/* <div></div.>> */}
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>

    <NavLink
      to="/predictor"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Predictor
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/about"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      About
    </NavLink>
  </div>
);

export default MainNav;
