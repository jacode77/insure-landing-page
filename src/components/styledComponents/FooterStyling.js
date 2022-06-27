import styled from "styled-components";
import BGFooter from "../../bg-pattern-footer-mobile.svg";

export const FooterWrapper = styled.section`
  background-image: url(${BGFooter});
  background-repeat: no-repeat;
  text-align: center;
`;

export const SubHeading = styled.h2`
  font-family: "Krona One", sans-serif;
  size: 40rem;
  font-weight: 400;
  padding-top: 3.8em;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
