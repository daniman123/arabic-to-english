import React from "react";

const ExerciseChoices = ({
  choices,
  answers,
  submitted,
  handleAnswerChange,
  submitAnswers,
}) => {
  const isSubmitDisabled = answers.includes("");

  const getAnswerClass = (choice, option) => {
    if (!submitted) return "";
    if (choice.answer === option) return "correct";
    if (answers[choice.number - 1]?.trim() === option) return "incorrect";
    return "";
  };

  return (
    <form onSubmit={submitAnswers}>
      {choices.map((choice) => (
        <div key={choice.number}>
          <p>{choice.number}. </p>
          {choice.options.map((option) => (
            <label key={option} className={getAnswerClass(choice, option)}>
              <input
                type="radio"
                value={option}
                checked={answers[choice.number - 1] === option}
                onChange={(e) => handleAnswerChange(e, choice.number - 1)}
                disabled={submitted}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default ExerciseChoices;
