import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavClicked, setIsNavClicked] = useState(false);

  const handleNavClick = () => {
    setIsNavClicked(true);
  };

  return (
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
            <Link to="/writing-exercise">Writing Exercise</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
