import React, { useState } from "react";
import Introduction from "./Introduction";
import Exercise from "./Exercise";
import { saveExerciseData } from "./ExerciseData";

import { startExercise, calculateScore } from "./ExerciseLogic";

function ReadingExercise() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitted) {
      return;
    }

    const tempScore = calculateScore(questions, answers);
    const percentage = Math.round((tempScore / questions.length) * 100);

    setScore((prevScore) => prevScore + tempScore);
    setSubmitted(true);
    saveExerciseData(text, questions, answers, percentage);
  };

  const resetAnswers = () => {
    setAnswers(new Array(questions.length).fill(""));
    setSubmitted(false);
  };

  const isSubmitDisabled = answers.includes("");

  return (
    <div className="container">
      <h1>Reading Comprehension Exercise</h1>

      {text ? (
        <Exercise
          text={text}
          questions={questions}
          answers={answers}
          submitted={submitted}
          handleAnswerChange={handleAnswerChange}
          handleSubmit={handleSubmit}
          isSubmitDisabled={isSubmitDisabled}
          score={score}
          resetAnswers={resetAnswers}
          startExercise={() =>
            startExercise(
              score,
              setText,
              setQuestions,
              setAnswers,
              setSubmitted
            )
          }
        />
      ) : (
        <Introduction
          startExercise={() =>
            startExercise(
              score,
              setText,
              setQuestions,
              setAnswers,
              setSubmitted
            )
          }
        />
      )}
    </div>
  );
}

export default ReadingExercise;
