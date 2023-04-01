import React, { useState } from "react";

import beginner from "../data/readingData/beginner.json";
import intermediate from "../data/readingData/intermediate.json";
import advanced from "../data/readingData/advanced.json";

function ReadingExercise() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  const handleDifficultyChange = (difficulty) => {
    setDifficulty(difficulty);
  };

  const startExercise = () => {
    const data = {
      beginner,
      intermediate,
      advanced,
    };

    const randomText =
      data[difficulty][Math.floor(Math.random() * data[difficulty].length)];

    setText(randomText.text);
    setQuestions(randomText.questions);
    setAnswers(new Array(randomText.questions.length).fill(""));
    setSubmitted(false);
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const renderQuestion = (question, index) => (
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitted) {
      return;
    }

    let tempScore = score;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        tempScore++;
      } else {
        tempScore--;
      }
    });

    setScore(tempScore);
    setSubmitted(true);
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
        <div>
          <p className="text">
            {text.split(" ").map((word, index) => (
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
          <form onSubmit={handleSubmit}>
            {questions.map(renderQuestion)}
            <br />
            <button type="submit" disabled={isSubmitDisabled}>
              Submit
            </button>
            <p>Your score: {score} / 30</p>
          </form>
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
      ) : (
        <>
          <p>اقرأ النص ثم أجب على الأسئلة حول النص</p>
          <p>"Start Exercise" اختر صعوبة وانقر</p>
          <br></br>
          <div className="sidebar">
            <p>Select difficulty:</p>
            <ul>
              <li>
                <button
                  className={
                    difficulty === "beginner"
                      ? "difficulty__active"
                      : "difficulty"
                  }
                  onClick={() => handleDifficultyChange("beginner")}
                >
                  Beginner
                </button>
              </li>
              <li>
                <button
                  className={
                    difficulty === "intermediate"
                      ? "difficulty__active"
                      : "difficulty"
                  }
                  onClick={() => handleDifficultyChange("intermediate")}
                >
                  Intermediate
                </button>
              </li>
              <li>
                <button
                  className={
                    difficulty === "advanced"
                      ? "difficulty__active"
                      : "difficulty"
                  }
                  onClick={() => handleDifficultyChange("advanced")}
                >
                  Advanced
                </button>
              </li>
            </ul>
          </div>

          <button className="start_exercise" onClick={startExercise}>
            Start Exercise
          </button>
        </>
      )}
    </div>
  );
}

export default ReadingExercise;
