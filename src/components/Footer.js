import React from "react";
import {
  FooterWrapper,
  SubHeading,
  LogoWrapper,
} from "./styledComponents/FooterStyling";
import FB from "../icon-facebook.svg";
import Twitter from "../icon-twitter.svg";
import Pinterest from "../icon-pinterest.svg";
import Instagram from "../icon-instagram.svg";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <SubHeading>INSURE</SubHeading>
        <LogoWrapper>
          <img src={FB} alt="Facebook logo" style={{ marginRight: "1em" }} />
          <img
            src={Twitter}
            alt="Twitter logo"
            style={{ marginRight: "1em" }}
          />
          <img
            src={Pinterest}
            alt="Pinterest logo"
            style={{ marginRight: "1em" }}
          />
          <img
            src={Instagram}
            alt="Instagram logo"
            style={{ marginRight: "1em" }}
          />
        </LogoWrapper>
        <h4>OUR COMPANY</h4>

        <h4>HOW WE WORK</h4>
        <h4>WHY INSURE?</h4>
        <h4>CHECK PRICE</h4>
        <h4>REVIEWS</h4>

        <h4>HELP ME</h4>

        <h4>FAQ</h4>
        <h4>TERMS OF USE</h4>
        <h4>PRIVACY POLICY</h4>
        <h4>COOKIES</h4>

        <h4>CONTACT</h4>

        <h4>SALES</h4>
        <h4>SUPPORT</h4>
        <h4>LIVE CHAT</h4>

        <h4>OTHERS</h4>

        <h4>CAREERS</h4>
        <h4>PRESS</h4>
        <h4>LICENSES</h4>
      </FooterWrapper>
    </>
  );
}

export default Footer;
