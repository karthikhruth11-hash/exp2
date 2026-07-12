import React, { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container">

      <div className="left-panel">
        <h1>React Dashboard</h1>
        <p>
          Conditional Rendering using React Hooks.
        </p>

        <div className="status">
          {loggedIn ? (
            <span className="online">🟢 Online</span>
          ) : (
            <span className="offline">🔴 Offline</span>
          )}
        </div>

        <button
          onClick={() => setLoggedIn(!loggedIn)}
          className="btn"
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>

      <div className="right-panel">

        <div className="avatar">
          {loggedIn ? "😊" : "👤"}
        </div>

        <h2>
          {loggedIn
            ? "Welcome Back!"
            : "Please Login"}
        </h2>

        <p>
          {loggedIn
            ? "You have successfully logged into your account."
            : "Click the Login button to continue."}
        </p>

      </div>

    </div>
  );
}

export default App;