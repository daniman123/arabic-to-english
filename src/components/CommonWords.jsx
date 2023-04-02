import React, { useState } from "react";

import "./CommonWords.css";

import words from "../data/vocabulary/commonWords.json";

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
    <div className="CommonWords">
      <h2 className="CommonWords">Common Words:</h2>
      <div className="CommonWords">
        <p className="CommonWords">
          Arabic: {words.words[currentWordIndex].arabic}
        </p>
        <span className="CommonWords">
          English:{" "}
          <a
            className="CommonWords"
            href={`https://translate.google.com/#en/ar/${words.words[currentWordIndex].english}`}
            target="_blank"
            rel="noreferrer"
          >
            {words.words[currentWordIndex].english}
          </a>{" "}
        </span>
        <p className="CommonWords">
          Arabic sentence: {words.words[currentWordIndex].sentenceArabic}
        </p>
        <span className="CommonWords">
          English sentence:{" "}
          <a
            className="CommonWords"
            href={`https://translate.google.com/#en/ar/${words.words[currentWordIndex].sentenceEnglish}`}
            target="_blank"
            rel="noreferrer"
          >
            {words.words[currentWordIndex].sentenceEnglish}
          </a>{" "}
        </span>
      </div>
      <button className="CommonWords" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default VocabularyExercise;
