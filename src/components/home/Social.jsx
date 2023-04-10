import React from "react";

const Social = () => {
  // ! change links later
  return (
    <div className="home__social">
      <a
        target="_blank"
        href="https://www.instagram.com/_itseduu/"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/carlos-soria-420398212/"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/caeduardo99"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;