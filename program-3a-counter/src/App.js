import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1 className="title">Functional Counter</h1>

      <h2 className={`counter ${count > 10 ? "high" : count > 5 ? "medium" : "low"}`}>
        {count}
      </h2>

      <div className="button-group">
        <button className="btn increment" onClick={increment}>
          Increment
        </button>

        <button className="btn decrement" onClick={decrement}>
          Decrement
        </button>

        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;