import React from "react";
import { Routes, Route } from "react-router-dom";

import { About, UserList, ProductList, ProductDetails, Wishlist } from "views";
import { routes } from "router";

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<h1>Home</h1>} />
      <Route path={routes.about.path} element={<About />} />
      <Route path={routes.users} element={<UserList />} />
      <Route path={routes.products} element={<ProductList />} />
      <Route path={routes.product} element={<ProductDetails />} />
      <Route path={routes.wishlist} element={<Wishlist />} />
    </Routes>
  );
};
