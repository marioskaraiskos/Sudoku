import React from "react";
import { useNavigate } from "react-router-dom";
import startpic from "./img/start.png";

function PlayGame() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game"); // Redirect to the game route
  };

  return (
    <div>
      <img
        src={startpic}
        alt="Start Game"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default PlayGame;
