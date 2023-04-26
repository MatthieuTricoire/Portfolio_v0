import React from "react";

import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobelightroom,
  SiJira,
} from "react-icons/si";

const Others = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Autres</h3>

      <div className="skills__box">
        <div className="skills__soft__container">
          <h3 className="skills__soft-name">Travail en équipe</h3>
          <h3 className="skills__soft-name">Agile / Scrum</h3>
          <h3 className="skills__soft-name">Force de proposition</h3>
          <h3 className="skills__soft-name">Facilité d'adaptation</h3>
          <h3 className="skills__soft-name">Sensibilité UX/UI</h3>
        </div>
      </div>
    </div>
  );
};

export default Others;
