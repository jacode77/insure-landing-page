import React from "react";
import BigFamily from "../image-intro-desktop.jpg";
import Snappy from "../icon-snappy-process.svg";
import Prices from "../icon-affordable-prices.svg";
import PeopleFirst from "../icon-people-first.svg";
import {
  MainImage,
  Humanizing,
  Title,
  HumanPara,
  DiffPara,
  SubHead,
  Button,
  IconImg,
} from "./styledComponents/BodyStyling";

function Body() {
  return (
    <>
      <MainImage>
        <img src={BigFamily} alt="family" width="375px" />
      </MainImage>
      <Humanizing>
        <Title>Humanizing your insurance.</Title>
        <HumanPara>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </HumanPara>
        <Button>VIEW PLANS</Button>
      </Humanizing>
      <section>
        <Title>We're different</Title>
        <IconImg>
          <img src={Snappy} alt="Snappy process icon" />
        </IconImg>
        <SubHead>Snappy Process</SubHead>
        <DiffPara>
          Out application process can be completed in minutes, not hours. Don't
          get stuck filling in tedious forms.
        </DiffPara>

        <IconImg>
          <img src={Prices} alt="Affordable prices icon" />
        </IconImg>

        <SubHead>Affordable Prices</SubHead>
        <DiffPara>
          We don't want you worrying about high monthly costs. Our prices may be
          low, but we still offer the best coverage possible.
        </DiffPara>

        <IconImg>
          <img src={PeopleFirst} alt="People first icon" />
        </IconImg>
        <SubHead>People First</SubHead>
        <DiffPara>
          Our plans aren't full of conditions and clauses to prevent payouts. We
          make sure you're covered when you need it.
        </DiffPara>
      </section>

      <section>
        <h1>Find out more about how we work</h1>
        <button>How we work</button>
      </section>
    </>
  );
}

export default Body;
