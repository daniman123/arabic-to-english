import React from "react";

const ExerciseSentence = ({ sentence }) => {
  return (
    <p>
      {sentence.split(" ").map((word, index) => (
        <span key={index}>
          <a
            href={`https://translate.google.com/#en/ar/${word}`}
            target="_blank"
            rel="noreferrer"
          >
            {word}
          </a>{" "}
        </span>
      ))}
    </p>
  );
};

export default ExerciseSentence;
