export const getRandomIndex = (exerciseData) =>
  Math.floor(Math.random() * exerciseData.length);

export const getAnswerClass = (choice, option, submitted, answers) => {
  if (!submitted) return "";
  if (choice.answer === option) return "correct";
  if (answers[choice.number - 1]?.trim() === option) return "incorrect";
  return "";
};

export const handleAnswerChange = (e, index, setAnswers, answers) => {
  const newAnswers = [...answers];
  newAnswers[index] = e.target.value;
  setAnswers(newAnswers);
};
