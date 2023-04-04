import React, { useState } from "react";

import {
  getRandomData,
  resetExerciseData,
  saveExerciseData,
} from "../readingExFiles/ExerciseData";
import Question from "../readingExFiles/Question";
import UserStats from "../readingExFiles/UserStats";

function ReadingExercise() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const startExercise = () => {
    const randomData = getRandomData(score);

    if (!randomData) {
      resetExerciseData();
      return;
    }

    setText(randomData.text);
    setQuestions(randomData.questions);
    setAnswers(new Array(randomData.questions.length).fill(""));
    setSubmitted(false);
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

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
          <br></br>
          <UserStats score={score} />
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
            "Start Exercise".لبدء تمرين فهم القراءة، يرجى النقر على الزر الذي
            يقول
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
