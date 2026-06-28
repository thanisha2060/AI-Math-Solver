import { useState } from "react";
import "./App.css";
import DrawingCanvas from "./components/DrawingCanvas";
import Navbar from "./components/Navbar";

function App() {

  const [answer, setAnswer] = useState(
    "Draw an equation and click Solve."
  );

  return (

    <div className="app">

      <navbar className="navbar">

        <h2>🧮 AI Math Solver</h2>

        <button className="login-btn">
          Login
        </button>

      </navbar>

      <div className="hero">

        <h1>Solve Mathematics with AI</h1>

        <p>
          Draw your equation or upload an image and let AI solve it instantly.
        </p>

      </div>

      <div className="main-container">

        <div className="left-panel">

          <h2>✍ Drawing Canvas</h2>

          <DrawingCanvas setAnswer={setAnswer} />

        </div>

        <div className="right-panel">

          <h2>🤖 AI Solution</h2>

          <div className="solution-card">

            {answer}

          </div>

        </div>

      </div>

    </div>

  );

}

export default App;