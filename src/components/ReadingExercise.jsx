import React, { useState } from "react";

import UserReadingStats from "./UserReadingStats";

import dater from "../data/readingData/data.json";

import exerciseLevelTracker from "../functions/exerciseLevelTracker";
const lvlTracker = new exerciseLevelTracker(dater);

function ReadingExercise() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  console.log(lvlTracker.getTextsLengthRanking());

  const startExercise = () => {
    const texts = dater;
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

  const filterCompletedTexts = (texts) => {
    const completedData =
      JSON.parse(window.localStorage.getItem("readingExerciseData")) || [];
    return texts.filter(
      (text) => !completedData.some((data) => data.text === text.text)
    );
  };

  const filterTextsByLength = (texts) => {
    const maxLength = score < 10 ? 100 : score < 17 ? 250 : Infinity;
    const minLength = score < 10 ? 0 : score < 17 ? 101 : 251;
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
    window.localStorage.removeItem("readingExerciseData");
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
      JSON.parse(window.localStorage.getItem("readingExerciseData")) || [];
    const newData = {
      text,
      questions,
      answers,
      percentage,
    };
    data.push(newData);
    window.localStorage.setItem("readingExerciseData", JSON.stringify(data));
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
          </form>
          <br></br>
          <UserReadingStats score={score} />
          <p>Your score: {score} / 30</p>
          <br></br>

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
          <p>
            تمرين فهم القراءة هو نوع من التمارين التعليمية، حيث يتم تقديم مقالة
            أو نص للمستخدم للقراءة والفهم. ثم يتعين على المستخدم الإجابة على
            الأسئلة المتعلقة بالنص، مما يختبر فهمه وفهمه للنص. يساعد هذا النوع
            من التمارين على تطوير وتحسين مهارات القراءة، بالإضافة إلى المهارات
            النقدية والتحليلية. ويتم استخدامه عادة في المدارس والمؤسسات
            التعليمية الأخرى لتقييم قدرات الطالب في القراءة والفهم.
            <br></br>
            <br></br>
            "Start Exercise".لبدء تمرين فهم القراءة، يرجى النقر على الزر الذي يقول 
          </p>
          <br></br>

          <button className="start_exercise" onClick={startExercise}>
            Start Exercise
          </button>
        </>
      )}
    </div>
  );
}

export default ReadingExercise;
