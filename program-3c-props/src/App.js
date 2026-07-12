import React from "react";
import "./App.css";

function App() {

  const handleClick = (e) => {

    // Ripple Effect
    const button = e.currentTarget;

    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);

    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;

    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) ripple.remove();

    button.appendChild(circle);

    alert("🎉 Button Clicked Successfully!");
  };

  return (
    <div className="app">

      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="circle c4"></div>

      <div className="card">

        <h1>🚀 Button Event</h1>

        <p>Click the button and enjoy the animation!</p>

        <button className="btn" onClick={handleClick}>
          Click Me
        </button>

      </div>

    </div>
  );
}

export default App;