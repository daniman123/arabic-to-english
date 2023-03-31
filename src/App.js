import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import VocabularyExercise from "./components/CommonWords";
import ReadingExercise from "./components/ReadingExercise";
// import WritingExercise from "./components/WritingExercise";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/arabic-to-english-learing-app/vocabulary-exercise">Vocabulary Exercises</Link>
          </li>
          <li>
            <Link to="/arabic-to-english-learing-app/reading-exercise">Reading Exercises</Link>
          </li>
          {/* <li>
              <Link to="/writing">Writing Exercises</Link>
            </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/vocabulary-exercise" element={<VocabularyExercise />} />
        <Route path="/reading-exercise" element={<ReadingExercise />} />
        {/* <Route path="/writing">
            <WritingExercise />
          </Route> */}
      </Routes>
    </div>
  );
}

export default App;
