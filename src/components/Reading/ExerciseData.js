import dater from "../../data/readingData/data.json";

export function filterCompletedTexts() {
  const completedData =
    JSON.parse(window.localStorage.getItem("readingExerciseData")) || [];
  return dater.filter(
    (text) => !completedData.some((data) => data.text === text.text)
  );
}

export function filterTextsByLength(score) {
  const maxLength = score < 10 ? 100 : score < 17 ? 250 : Infinity;
  const minLength = score < 10 ? 0 : score < 17 ? 101 : 251;
  return filterCompletedTexts().filter(
    (data) => data.text.length >= minLength && data.text.length <= maxLength
  );
}

export function getRandomData(score) {
  const data = filterTextsByLength(score);
  return data.length > 0 ? data[Math.floor(Math.random() * data.length)] : null;
}

export function saveExerciseData(text, questions, answers, percentage) {
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
}

export function resetExerciseData() {
  window.localStorage.removeItem("readingExerciseData");
}
