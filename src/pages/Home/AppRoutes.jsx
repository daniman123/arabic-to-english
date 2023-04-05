import React from "react";
import { Routes, Route } from "react-router-dom";

import commonWords from "../../data/vocabulary/commonWords.json";

import VocabularyExercise from "../Vocabulary/CommonWords";
import ReadingExercise from "../Reading/ReadingExercise";
import WritingExercise from "../Writing/WritingExercise";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/vocabulary-exercise"
        element={<VocabularyExercise words={commonWords.words} />}
      />
      <Route path="/reading-exercise" element={<ReadingExercise />} />
      <Route path="/writing-exercise" element={<WritingExercise />} />
    </Routes>
  );
};

export default AppRoutes;
