import React, { useState } from "react";


const VocabularyExerciseState = ({ words, onIndexChange }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex =
      currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
    setCurrentWordIndex(nextIndex);
    onIndexChange(nextIndex);
  };

  return (
    
    <button className="CommonWords" onClick={handleNextClick}>
      Next
    </button>
  );
};

export default VocabularyExerciseState;
