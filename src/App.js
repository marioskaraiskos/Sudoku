import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayGame from "./PlayGame";
import ChooseDifficulty from "./ChooseDifficulty"; 
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";



function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<PlayGame />} />
          <Route path="/game/" element={<ChooseDifficulty />} /> 
          <Route path="/game/easy" element={<Easy />} />
          <Route path="/game/medium" element={<Medium />} />
          <Route path="/game/hard" element={<Hard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
