import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "router";
import { NavBar } from "components";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}
