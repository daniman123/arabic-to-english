import React, { useState } from "react";
import {
  getRandomData,
  resetExerciseData,
  saveExerciseData,
} from "./ExerciseData";
import Introduction from "./Introduction";
import Exercise from "./Exercise";

function ReadingExercise() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const startExercise = () => {
    const randomData = getRandomData(score || 0);

    if (!randomData) {
      resetExerciseData();
      setText("");
      setQuestions([]);
      setAnswers([]);
      setSubmitted(false);
      return;
    }

    setText(randomData.text);
    setQuestions(randomData.questions || []); // add this check
    setAnswers(new Array(randomData.questions?.length || 0).fill(""));
    setSubmitted(false);
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const calculateScore = (questions, answers) => {
    return answers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);
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
          startExercise={startExercise}
        />
      ) : (
        <Introduction startExercise={startExercise} />
      )}
    </div>
  );
}

export default ReadingExercise;