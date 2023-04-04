import React, { useState } from "react";
import "./CommonWords.css";
import VocabularyExerciseUI from "./VocabularyExerciseUI";
import VocabularyExerciseState from "./VocabularyExerciseState";

const VocabularyExercise = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleIndexChange = (index) => {
    setCurrentWordIndex(index);
  };

  return (
    <>
      <VocabularyExerciseUI word={words[currentWordIndex]} />
      <VocabularyExerciseState
        words={words}
        onIndexChange={handleIndexChange}
      />
    </>
  );
};

export default VocabularyExercise;
