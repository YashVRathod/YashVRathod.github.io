import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #f9f9f9; /* Light gray background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-image {
    height: auto;
    max-width: 15%;
  }
`;

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo-image" src="./images/logo.png" alt="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

export default Header;
