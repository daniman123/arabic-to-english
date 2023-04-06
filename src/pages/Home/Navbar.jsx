import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [isNavClicked, setIsNavClicked] = useState(false);

  const handleNavClick = () => {
    setIsNavClicked(true);
  };

  return (
    <div className={isNavClicked ? "" : "home__container"}>
      {isNavClicked ? (
        <></>
      ) : (
        <h1 className="home__title">من العربية إلى الإنجليزية</h1>
      )}

      <div
        className={isNavClicked ? "nav-clicked" : "nav"}
        onClick={handleNavClick}
      >
        <nav>
          <ul>
            <li>
              <Link to="/vocabulary-exercise">Vocabulary Exercises</Link>
            </li>
            <li>
              <Link to="/reading-exercise">Reading Exercises</Link>
            </li>
            <li>
              <Link to="/writing-exercise">Writing Exercises</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
