import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function App() {
  const [isNavClicked, setIsNavClicked] = useState(false);

  return (
    <div className={isNavClicked ? "" : "home__container"}>
      {isNavClicked ? (
        <></>
      ) : (
        <>
          <h1 className="home__title">من العربية إلى الإنجليزية</h1>
          <div>
            <span className="info-bubble">
              Learn new words and improve your vocabulary skills
            </span>
            <span className="info-bubble">
              Practice reading comprehension and improve your understanding
            </span>
            <span className="info-bubble">
              Improve your writing skills and learn new writing techniques
            </span>
          </div>
        </>
      )}

      <div
        className={isNavClicked ? "nav-clicked" : "nav"}
        onClick={() => setIsNavClicked(true)}
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

export default App;
