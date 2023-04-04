import React from "react";

function UserStats({ score }) {
  return (
    <div>
      <p>Your score: {score} / 30</p>
    </div>
  );
}

export default UserStats;