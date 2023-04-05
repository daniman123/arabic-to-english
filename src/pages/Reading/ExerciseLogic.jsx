import { getRandomData, resetExerciseData } from "./ExerciseData";

export function startExercise(
  score,
  setText,
  setQuestions,
  setAnswers,
  setSubmitted
) {
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
  setQuestions(randomData.questions || []);
  setAnswers(new Array(randomData.questions?.length || 0).fill(""));
  setSubmitted(false);
}

export function calculateScore(questions, answers) {
  return answers.reduce((acc, answer, index) => {
    return answer === questions[index].answer ? acc + 1 : acc;
  }, 0);
}
