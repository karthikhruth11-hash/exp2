import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const getCounterColor = () => {
    if (count < 10) return "#00ff88"; // Green
    if (count < 20) return "#ffd700"; // Yellow
    return "#ff4d4d"; // Red
  };

  return (
    <div className="app">
      {/* Floating Circles */}
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="circle c4"></div>

      <div className="container">
        <h1 className="title">✨ Functional Counter ✨</h1>

        <h2
          className="counter"
          style={{ color: getCounterColor() }}
        >
          {count}
        </h2>

        <button className="button" onClick={increment}>
          Increment 🚀
        </button>
      </div>
    </div>
  );
}

export default App;