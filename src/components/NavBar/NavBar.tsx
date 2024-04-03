import React from "react";
import { Link } from "react-router-dom";

import { routes } from "router";

import classes from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={classes.navWrapper}>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.about.link}>About</Link>
      <Link to={routes.users}>Users</Link>
      <Link to={routes.products}>Products</Link>
      <Link to={routes.wishlist}>Wishlist</Link>
    </nav>
  );
};
