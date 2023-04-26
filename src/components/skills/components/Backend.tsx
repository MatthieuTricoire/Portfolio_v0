import React from "react";
import { SiNodedotjs, SiMongodb } from "react-icons/si";
import { FaStripeS } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <SiNodedotjs className="skills__icon" />
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <SiMongodb className="skills__icon" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <FaStripeS className="skills__icon" />
            <div>
              <h3 className="skills__name">Stripe</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <HiOutlinePhotograph className="skills__icon" />
            <div>
              <h3 className="skills__name">Cloudinary</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
