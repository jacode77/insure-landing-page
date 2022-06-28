import styled from "styled-components";
import IntroTop from "../../bg-pattern-intro-left-mobile.svg";
import IntroBottom from "../../bg-pattern-intro-right-mobile.svg";

export const MainImage = styled.div`
  display: flex;
  min-width: 375px;
  height: auto;
`;

export const Humanizing = styled.section`
  background-color: hsl(256, 26%, 20%);
  background-image: url(${IntroTop});
  /* background-image: url(${IntroBottom}); */
  background-repeat: no-repeat;
  color: white;
  margin: 0;
  text-align: center;
  padding: 5em 0 5em 0;
`;

export const Title = styled.h1`
  margin: 0 0.8em;
  font-family: "DM Serif Display", serif;
  text-align: center;
  font-size: 2.4em;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const SubHead = styled.h1`
  margin: 0 1em 0 1em;
  font-family: "DM Serif Display", serif;
  text-align: center;
  letter-spacing: 1px;
  /* padding: 3em 0 3em 0; */
`;

export const HumanPara = styled.p`
  font-family: "Karla", sans-serif;
  font-weight: 800;
  margin: 1.5em 2.2em;
  line-height: 1.7;
  text-align: center;
  font-size: 1em;
  /* letter-spacing: 0.5px; */
`;

export const Button = styled.button`
  font-family: "Karla", sans-serif;
  background-color: hsl(256, 26%, 20%);
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  margin: 1em;
  padding: 0.6em 1.5em;
  border: 1.5px solid white;
  letter-spacing: 1px;
`;

export const DiffPara = styled.p`
  font-family: "Karla", sans-serif;
  font-weight: 800;
  margin: 1.5em 2em;
  line-height: 1.7;
  text-align: center;
  letter-spacing: 0.5px;
  color: hsl(273, 4%, 51%);
`;

export const IconImg = styled.p`
  text-align: center;
  margin: 2em 0;
`;

export const Work = styled.section`
  background-color: hsl(256, 26%, 20%);
  background-repeat: no-repeat;
  color: white;
  margin: 8em 1.5em;
  text-align: center;
  padding: 3em 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1em;
`;

export const Line = styled.div`
  text-align: center;
  margin: 8em 4em 2em;
  color: #b2a5b5;
`;
