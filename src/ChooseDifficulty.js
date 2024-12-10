import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Easy from "./Easy";  
import Medium from "./Medium";  
import Hard from "./Hard";  

function ChooseDifficulty() {
  return (
    <div>
      <h1>Choose Difficulty:</h1>
      <nav>
        <ul>
          <li>
            <Link to="easy">Easy</Link> {/* Corrected link path */}
          </li>
          <li>
            <Link to="medium">Medium</Link> {/* Corrected link path */}
          </li>
          <li>
            <Link to="hard">Hard</Link> {/* Corrected link path */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="easy" element={<Easy />} />  
        <Route path="medium" element={<Medium />} />  
        <Route path="hard" element={<Hard />} />  
      </Routes>
    </div>
  );
}

export default ChooseDifficulty;
