import React from "react";
import { useNavigate } from "react-router-dom";

function ChooseDifficulty() {
  const navigate = useNavigate();

  const handleDifficultySelection = (difficulty) => {
    navigate(`/game/${difficulty}`);
  };

  return (
    <div>
      <h1>Choose Difficulty:</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleDifficultySelection("easy")}>Easy</button>
          </li>
          <li>
            <button onClick={() => handleDifficultySelection("medium")}>Medium</button>
          </li>
          <li>
            <button onClick={() => handleDifficultySelection("hard")}>Hard</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ChooseDifficulty;
