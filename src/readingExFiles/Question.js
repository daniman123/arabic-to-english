import React from "react";

function Question({ question, index, answers, submitted, handleAnswerChange }) {
  return (
    <div key={index}>
      <p>
        <span>
          <a
            href={`https://translate.google.com/#en/ar/${question.question}`}
            target="_blank"
            rel="noreferrer"
          >
            {question.question}
          </a>{" "}
        </span>
      </p>
      {question.options.map((option, optionIndex) => (
        <label
          key={optionIndex}
          className={
            submitted
              ? option === question.answer
                ? "correct"
                : "incorrect"
              : ""
          }
        >
          <input
            type="radio"
            name={`question-${index}`}
            value={option}
            checked={answers[index] === option}
            onChange={(e) => handleAnswerChange(e, index)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Question;