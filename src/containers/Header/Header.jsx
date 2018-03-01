import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Style";

const activeStyles = {
  color: "#f90"
};

export default () => (
  <Header>
    <div>
      <h1>Tín Marín</h1>
      <nav>
        <NavLink to="/" exact activeStyle={activeStyles}>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle={activeStyles}>
          About
        </NavLink>
      </nav>
    </div>
  </Header>
);
