import React, { useState } from "react";

import "./App.css";


import words from "../data/readingData/vocabulary/commonWords.json";

const VocabularyExercise = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNextClick = () => {
    if (currentWordIndex === words.words.length - 1) {
      setCurrentWordIndex(0);
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  return (
    <div>
      <h2>Common Words:</h2>
      <div>
        <p>Arabic: {words.words[currentWordIndex].arabic}</p>
        <span>
          English: {" "}
           <a
            href={`https://translate.google.com/#en/ar/${words.words[currentWordIndex].english}`}
            target="_blank"
            rel="noreferrer"
          >
            {words.words[currentWordIndex].english}
          </a>{" "}
        </span>
        <p>Arabic sentence: {words.words[currentWordIndex].sentenceArabic}</p>
        <span>
          English sentence: {" "}
           <a
            href={`https://translate.google.com/#en/ar/${words.words[currentWordIndex].sentenceEnglish}`}
            target="_blank"
            rel="noreferrer"
          >
            {words.words[currentWordIndex].sentenceEnglish}
          </a>{" "}
        </span>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default VocabularyExercise;
