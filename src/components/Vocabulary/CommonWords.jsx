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
    <div className="CommonWords">
      <VocabularyExerciseUI word={words[currentWordIndex]} />
      <br></br>
      <VocabularyExerciseState
        words={words}
        onIndexChange={handleIndexChange}
      />
    </div>
  );
};

export default VocabularyExercise;
