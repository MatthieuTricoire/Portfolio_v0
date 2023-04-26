import React from "react";

import "./portfolio.css";

// Components import
import Projects from "./components/Projects";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Mes derniers projets</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
