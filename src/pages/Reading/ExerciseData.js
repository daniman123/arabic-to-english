import dater from "../../data/readingData/data.json";

export function filterCompletedTexts() {
  const completedData =
    JSON.parse(window.localStorage.getItem("readingExerciseData")) || [];
  return dater.filter(
    (text) => !completedData.some((data) => data.text === text.text)
  );
}

const getLengthRangeForScore = (score) => {
  if (score < 10) {
    return [0, 100];
  } else if (score < 17) {
    return [101, 250];
  } else {
    return [251, Infinity];
  }
};

export function filterTextsByLength(score) {
  const [minLength, maxLength] = getLengthRangeForScore(score);

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
