import React from "react";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title"> Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <AiFillHtml5 className="skills__icon" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <FaCss3Alt className="skills__icon" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <SiJavascript className="skills__icon" />
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <FaReact className="skills__icon" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <SiTypescript className="skills__icon" />
            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>

          <div className="skills__data">
            <AiFillGithub className="skills__icon" />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Junior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
