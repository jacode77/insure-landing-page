import React from "react";
import Menu from "../icon-hamburger.svg";
import { NavBar, Wrapper } from "./styledComponents/NavBar";
function Navigation() {
  return (
    <>
      <Wrapper>
        <NavBar>INSURE</NavBar>
        <img src={Menu} alt="menu icon" />
      </Wrapper>
    </>
  );
}

export default Navigation;
