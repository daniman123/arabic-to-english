import React, { useState, useEffect } from "react";

import "./UserReadingStats.css";

const UserReadingStats = ({ score }) => {
  const [level, setLevel] = useState("unknown");

  useEffect(() => {
    if (score < 10) {
      setLevel("Beginner");
    } else if (score > 10 && score < 17) {
      setLevel("Intermediate");
    } else if (score > 17) {
      setLevel("Advanced");
    }
  }, [score]);

  return (
    <div className="Reader_level" id={level}>
    User Level: {level}
    </div>
  );
};
export default UserReadingStats;
