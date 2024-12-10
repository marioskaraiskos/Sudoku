import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayGame from "./PlayGame";
import ChooseDifficulty from "./ChooseDifficulty";  {/* Updated import */}

function App() {
  return (
    <Router>
      <div>
        <h1>Game App</h1>
        <Routes>
          <Route path="/" element={<PlayGame />} />
          <Route path="/game/*" element={<ChooseDifficulty />} /> {/* Updated route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
