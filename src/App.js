import React from "react";
import {
  BrowserRouter as HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

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
            <Link to="/vocabulary-exercise">Vocabulary Exercises</Link>
          </li>
          <li>
            <Link to="/reading-exercise">Reading Exercises</Link>
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
