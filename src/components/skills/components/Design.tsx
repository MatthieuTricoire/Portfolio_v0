import React from "react";

import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobelightroom,
} from "react-icons/si";

const Design = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Design</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <SiFigma className="skills__icon" />
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Avancé</span>
            </div>
          </div>

          <div className="skills__data">
            <SiAdobeillustrator className="skills__icon" />
            <div>
              <h3 className="skills__name">Illustrator</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <SiAdobexd className="skills__icon" />
            <div>
              <h3 className="skills__name">XD</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <SiAdobelightroom className="skills__icon" />
            <div>
              <h3 className="skills__name">Lightroom</h3>
              <span className="skills__level">Avancé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
