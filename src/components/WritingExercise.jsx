import React, { useState } from "react";
import exerciseData from "../data/writingData/data.json";
import "./WritingExercise.css";

const WritingExercise = () => {
  const [exercise, setExercise] = useState({});
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const getRandomIndex = () => Math.floor(Math.random() * exerciseData.length);

  const startExercise = () => {
    const index = getRandomIndex();
    const currentExercise = exerciseData[index];
    setExercise({
      index,
      sentence: currentExercise.sentence,
      choices: currentExercise.choices,
    });
    setAnswers([]);
    setSubmitted(false);
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const isSubmitDisabled = answers.includes("");

  const submitAnswers = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getAnswerClass = (choice, option) => {
    if (!submitted) return "";
    if (choice.answer === option) return "correct";
    if (answers[choice.number - 1]?.trim() === option) return "incorrect";
    return "";
  };

  return (
    <div className="WritingExercise__container">
      <h1>Writing Exercise</h1>
      {exercise.sentence ? (
        <div className="writingExercise">
          <p>
            {exercise.sentence.split(" ").map((word, index) => (
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
          <form onSubmit={submitAnswers}>
            {exercise.choices.map((choice) => (
              <div key={choice.number}>
                <p>{choice.number}. </p>
                {choice.options.map((option) => (
                  <label
                    key={option}
                    className={getAnswerClass(choice, option)}
                  >
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

          {submitted && (
            <div className="result">
              <button
                className="next-exercise"
                onClick={startExercise}
                disabled={!submitted}
              >
                Next Exercise
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="writingExercise">
          <p className="writing__instr">
            تمرين ملء الفراغات هو نوع من التمارين التعليمية التي يتم فيها تقديم
            عبارة أو جملة مع كلمة واحدة أو أكثر مفقودة. يجب على المستخدم ملء
            المسافات المفقودة عن طريق كتابة الكلمات المناسبة في المساحات الفارغة
            الموجودة. يتم استبدال المساحات الفارغة بالأرقام ، ثم عليك النقر فوق
            الكلمة المفقودة الصحيحة تحت الرقم المقابل لها. يستخدم هذا النوع من
            التمارين عادة لاختبار معرفة الشخص وفهمه لموضوع معين. لبدء التمرين ،
            يرجى
            <br></br>
            <br></br>
            ."Start Exercise" النقر على الزر الذي يقول
          </p>
          <button className="start-exercise" onClick={startExercise}>
            Start Exercise
          </button>
        </div>
      )}
    </div>
  );
};

export default WritingExercise;
