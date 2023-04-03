import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import VocabularyExercise from "./components/CommonWords";
import ReadingExercise from "./components/ReadingExercise";
import WritingExercise from "./components/WritingExercise";

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <div className={clicked ? "nav-clicked" : "nav"}>
        <nav onClick={handleClick}>
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
      <Routes>
        <Route path="/vocabulary-exercise" element={<VocabularyExercise />} />
        <Route path="/reading-exercise" element={<ReadingExercise />} />
        <Route path="/writing-exercise" element={<WritingExercise />} />
      </Routes>
    </div>
  );
}

export default App;
