import React, { useState } from "react";
import "./education.css";

import { BsBriefcase } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const Education = () => {
  const [toggleCategory, setToggleCategory] = useState<number>(2);

  const toggleTab = (index: number) => {
    setToggleCategory(index);
  };

  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Mon parcours</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleCategory === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className="qualification__icon" /> Formation
          </div>

          <div
            className={
              toggleCategory === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <BsBriefcase className="qualification__icon" /> Expérience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleCategory === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Le Reacteur</h3>
                <span className="qualification__subtitle">Distanciel</span>
                <div className="qualification__calendar">
                  <AiOutlineCalendar className="qualification__icon" /> 01/2023
                  - 03/2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Master Hydrogéologie</h3>
                <span className="qualification__subtitle">
                  Univsersité des sciences- Montpellier
                </span>
                <div className="qualification__calendar">
                  <AiOutlineCalendar className="qualification__icon" /> 2007 -
                  2012
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DUT Informatique</h3>
                <span className="qualification__subtitle">
                  IUT - Montpellier
                </span>
                <div className="qualification__calendar">
                  <AiOutlineCalendar className="qualification__icon" /> 2005 -
                  2007
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleCategory === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Proxy Product Owner</h3>
                <span className="qualification__subtitle">
                  TotalEnergie - Pau
                </span>
                <div className="qualification__calendar">
                  <AiOutlineCalendar className="qualification__icon" /> 2018 -
                  2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ingénieur projet</h3>
                <span className="qualification__subtitle">
                  TotalEnergie - Pau
                </span>
                <div className="qualification__calendar">
                  <AiOutlineCalendar className="qualification__icon" /> 2012 -
                  2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <FaGraduationCap className="education__icon" /> Formations

    // <AiOutlineCalendar className="education__icon" />
  );
};

export default Education;
