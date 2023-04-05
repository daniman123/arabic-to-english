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
  onAnswerChange,
  correctAnswerStyle,
  incorrectAnswerStyle,
}) {
  const submitted = selectedAnswer !== null;

  return (
    <div>
      {options.map((option, optionIndex) => (
        <label
          key={optionIndex}
          className={
            submitted
              ? option === selectedAnswer
                ? correctAnswerStyle
                : incorrectAnswerStyle
              : ""
          }
        >
          <input
            type="radio"
            name={`question-${index}`}
            value={option}
            checked={selectedAnswer === option}
            onChange={(e) => onAnswerChange(e.target.value)}
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
  onAnswerChange,
  correctAnswerStyle,
  incorrectAnswerStyle,
}) {
  return (
    <div key={index}>
      <QuestionText question={question.question} />
      <QuestionOptions
        options={question.options}
        index={index}
        selectedAnswer={answers[index]}
        onAnswerChange={(value) => onAnswerChange(index, value)}
        correctAnswerStyle={correctAnswerStyle}
        incorrectAnswerStyle={incorrectAnswerStyle}
      />
    </div>
  );
}

export default Question;
