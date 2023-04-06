import React from "react";

function QuestionText({ question }) {
  return (
    <div>
      <p>
        <span>
          <a
            href={`https://translate.google.com/#en/ar/${question}`}
            target="_blank"
            rel="noreferrer"
          >
            {question}
          </a>{" "}
        </span>
      </p>
    </div>
  );
}

function QuestionOptions({
  options,
  index,
  selectedAnswer,
  handleAnswerChange,
  correctAnswerStyle,
  incorrectAnswerStyle,
  submitted,
}) {
  return (
    <div>
      {options.map((option, optionIndex) => (
        <label
          key={optionIndex}
          className={
            submitted
              ? option === selectedAnswer
                ? "correct"
                : "incorrect"
              : ""
          }
        >
          <input
            type="radio"
            name={`question-${index}`}
            value={option}
            checked={selectedAnswer === option}
            onChange={(e) => handleAnswerChange(e.target.value, index)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

function Question({
  question,
  index,
  answers,
  handleAnswerChange,
  correctAnswerStyle,
  incorrectAnswerStyle,
  submitted,
}) {
  return (
    <div key={index}>
      <QuestionText question={question.question} />
      <QuestionOptions
        options={question.options}
        index={index}
        selectedAnswer={answers[index]}
        handleAnswerChange={handleAnswerChange}
        correctAnswerStyle={correctAnswerStyle}
        incorrectAnswerStyle={incorrectAnswerStyle}
        submitted={submitted}
      />
    </div>
  );
}

export default Question;
