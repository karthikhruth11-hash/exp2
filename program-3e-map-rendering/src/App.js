import React from "react";
import "./App.css";

function App() {
  const message = "Welcome to React JS";
  const course = "React Basics";
  const college = "SVPCET";

  return (
    <div className="container">

      <div className="card">

        <div className="icon">⚛️</div>

        <h1>React Learning Portal</h1>

        <div className="info">
          <h2>{message}</h2>

          <h3>📘 {course}</h3>

          <h4>🎓 {college}</h4>
        </div>

        <button className="btn">
          Start Learning 🚀
        </button>

      </div>

    </div>
  );
}

export default App;