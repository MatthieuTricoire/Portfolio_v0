import React from "react";
import "./home.css";

// Component import
import Social from "./components/Social";
import Data from "./components/Data";
import ScrollDown from "./components/Scroll";

const Home = () => {
  return (
    <div className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </div>
  );
};

export default Home;
