import React from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";
import GlobalStyle from "./components/styledComponents/GlobalStyling";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}

export default App;
