import React from "react";

const ExerciseResult = ({ startExercise, submitted }) => {
  return (
    <div className="result">
      <button
        className="next-exercise"
        onClick={startExercise}
        disabled={!submitted}
      >
        Next Exercise
      </button>
    </div>
  );
};

export default ExerciseResult;
