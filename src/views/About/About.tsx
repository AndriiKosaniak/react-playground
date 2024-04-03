import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import { routes } from "router";

export const About = () => {
  return (
    <div>
      About
      <Link to={routes.about.children.legal.path}>Open legal</Link>
      <Routes>
        <Route
          path="legal"
          element={
            <div>
              <h1>Legal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam qui modi eligendi illum, doloribus nostrum
                consequuntur voluptates perspiciatis aperiam blanditiis unde
                sunt debitis quisquam dicta eaque. Mollitia quas distinctio
                explicabo!
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
};
