import React, { useState } from "react";

import dater from "../data/readingData/data.json";
import beginner from "../data/readingData/beginner.json";
import intermediate from "../data/readingData/intermediate.json";
import advanced from "../data/readingData/advanced.json";

import JSONData from "../functions/exerciseLevelTracker";

function ReadingExercise() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  const getLength = (data) => {
    const jsonDataObj = new JSONData(data);
    const rank = jsonDataObj.getTextsLengthRanking();
    // console.log(rank);
  };

  getLength(dater);

  const handleDifficultyChange = (difficulty) => {
    setDifficulty(difficulty);
  };

  const startExercise = () => {
    const texts = getTextsByDifficulty(difficulty);
    const availableData = filterCompletedTexts(texts);
    const filteredData = filterTextsByLength(availableData);
    const randomData = getRandomData(filteredData);

    if (!randomData) {
      resetExerciseData();
      return;
    }

    setText(randomData.text);
    setQuestions(randomData.questions);
    setAnswers(new Array(randomData.questions.length).fill(""));
    setSubmitted(false);
  };

  const getTextsByDifficulty = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return beginner;
      case "intermediate":
        return intermediate;
      case "advanced":
        return advanced;
      default:
        return null;
    }
  };

  const filterCompletedTexts = (texts) => {
    const completedData =
      JSON.parse(sessionStorage.getItem("readingExerciseData")) || [];
    return texts.filter(
      (text) => !completedData.some((data) => data.text === text.text)
    );
  };

  const filterTextsByLength = (texts) => {
    const maxLength = score < 10 ? 100 : Infinity;
    const minLength = score >= 17 ? 150 : 0;
    return texts.filter(
      (data) => data.text.length >= minLength && data.text.length <= maxLength
    );
  };

  const getRandomData = (data) => {
    return data.length > 0
      ? data[Math.floor(Math.random() * data.length)]
      : null;
  };

  const resetExerciseData = () => {
    sessionStorage.removeItem("readingExerciseData");
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

    const totalQuestions = questions.length;
    const tempScore = answers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);
    const percentage = Math.round((tempScore / totalQuestions) * 100);

    setScore((prevScore) => prevScore + tempScore);
    setSubmitted(true);
    const data =
      JSON.parse(window.sessionStorage.getItem("readingExerciseData")) || [];
    const newData = {
      text,
      questions,
      answers,
      percentage,
    };
    data.push(newData);
    window.sessionStorage.setItem("readingExerciseData", JSON.stringify(data));
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
