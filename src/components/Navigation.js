import React, { useState } from "react";
import Menu from "../icon-hamburger.svg";
import menuItems from "./MenuItems";
import { NavBarTitle, Wrapper } from "./styledComponents/NavBar";

function Navigation() {
  const [navbarOpen, setNavBarOpen] = useState(false);
  const handleToggle = () => {
    setNavBarOpen(!navbarOpen);
  };

  return (
    <>
      <Wrapper>
        <NavBarTitle>INSURE</NavBarTitle>
        <div>
          <img src={Menu} alt="menu icon" onClick={handleToggle} />
          <ul className="menu">
            {menuItems.map((menu, index) => {
              return (
                <li className="menu-items" key={index}>
                  <a href="/#">{menu.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  );
}

export default Navigation;
