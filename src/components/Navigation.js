import * as React from "react";
import MenuImg from "../icon-hamburger.svg";
import { NavBarTitle, Wrapper } from "./styledComponents/NavBar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Wrapper>
        <NavBarTitle>INSURE</NavBarTitle>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={MenuImg} alt="menu icon" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>HOW WE WORK</MenuItem>
          <MenuItem onClick={handleClose}>BLOG</MenuItem>
          <MenuItem onClick={handleClose}>ACCOUNT</MenuItem>
        </Menu>
      </Wrapper>
    </>
  );
}

export default Navigation;
