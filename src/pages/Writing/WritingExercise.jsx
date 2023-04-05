import React, { useState } from "react";
import exerciseData from "../../data/writingData/data.json";
import "./WritingExercise.css";

import StartExercise from "./StartExercise";
import ExerciseSentence from "./ExerciseSentence";
import ExerciseChoices from "./ExerciseChoices";
import ExerciseResult from "./ExerciseResult";
import {
  getRandomIndex,
  handleAnswerChange,
  getAnswerClass,
} from "./WritingExerciseUtils";

const WritingExercise = () => {
  const [exercise, setExercise] = useState({});
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const startExercise = () => {
    const index = getRandomIndex(exerciseData);
    const currentExercise = exerciseData[index];
    setExercise({
      index,
      sentence: currentExercise.sentence,
      choices: currentExercise.choices,
    });
    setAnswers([]);
    setSubmitted(false);
  };

  const isSubmitDisabled = answers.includes("");

  const submitAnswers = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="WritingExercise__container">
      <h1>Writing Exercise</h1>
      {exercise.sentence ? (
        <div className="writingExercise">
          <ExerciseSentence sentence={exercise.sentence} />
          <ExerciseChoices
            choices={exercise.choices}
            answers={answers}
            submitted={submitted}
            handleAnswerChange={(e, index) =>
              handleAnswerChange(e, index, setAnswers, answers)
            }
            getAnswerClass={getAnswerClass}
            submitAnswers={submitAnswers}
            isSubmitDisabled={isSubmitDisabled}
          />

          {submitted && (
            <ExerciseResult
              startExercise={startExercise}
              submitted={submitted}
            />
          )}
        </div>
      ) : (
        <StartExercise startExercise={startExercise} />
      )}
    </div>
  );
};

export default WritingExercise;
