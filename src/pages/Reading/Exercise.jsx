import React from "react";
import Text from "./Text";
import Question from "./Question";
import UserStats from "./UserStats";
import UserReadingStats from "./UserReadingStats";

const Exercise = ({
  text,
  questions,
  answers,
  submitted,
  handleAnswerChange,
  handleSubmit,
  isSubmitDisabled,
  score,
  resetAnswers,
  startExercise,
}) => {
  return (
    <div>
      <Text text={text} />

      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            index={index}
            answers={answers}
            submitted={submitted}
            handleAnswerChange={handleAnswerChange}
          />
        ))}
        <br />
        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
      <br />
      <UserReadingStats score={score} />
      <UserStats score={score} />
      <br />

      <button
        className="next_exercise"
        onClick={() => {
          resetAnswers();
          startExercise();
        }}
      >
        Next Exercise
      </button>
    </div>
  );
};

export default Exercise;
