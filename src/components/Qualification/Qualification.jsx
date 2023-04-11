import React from "react";
import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My academic journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience 
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  Software Engineer
                </h3>
                <span className="qualification__subtitle">
                  Catholic University of Cuenca, EC
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 May-2023 April
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">
                  Ishida Industry of Software
                </h3>
                <span className="qualification__subtitle">TBA</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  Data Structures and Algorithms
                </h3>
                <span className="qualification__subtitle">
                  Popular dsa in Java
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;