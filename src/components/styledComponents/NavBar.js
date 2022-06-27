import styled from "styled-components";

export const NavBarTitle = styled.h1`
  font-family: "Krona One", sans-serif;
  size: 40rem;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;
`;

export const NavBar = styled.div`
  position: relative;
`;

export const NavBarButton = styled.img`
  position: fixed;
  left: 40px;
  top: 40px;
  z-index: 10;
  cursor: pointer;
`;

export const menuNav = styled.ul`
  overflow-y: scroll;
  list-style: none;
  position: fixed;
  top: 0;
  background: darkcyan;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 0;
  overflow: hidden;
  max-width: 290px;
  z-index: 9;
`;

// .menuNav.showMenu {
//   width: 100%;
// }

export const menuItems = styled.a`
  display: block;
  padding: 10px 40px;
  text-decoration: none;
  color: #3fffd2;
  text-transform: uppercase;
  font-weight: bold;
`;

// .menuNav li:first-child {
//   margin-top: 7rem;
// }
