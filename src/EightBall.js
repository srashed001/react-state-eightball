import "./EightBall.css";
const { useState } = require("react");

const EightBall = ({ answers }) => {
  const [state, setState] = useState("Think of a question");
  const [stateColor, setStateColor] = useState("black");
  const randomIdx = Math.floor(Math.random() * answers.length);
  const getAnswer = () => {
    setState(answers[randomIdx].msg);
    setStateColor(answers[randomIdx].color);
  };
  const reset = () => {
      setState("Think of a question")
      setStateColor("black")
  }
  return (
    <>
      <div
        className="EightBall-container"
        style={{ backgroundColor: stateColor }}
        onClick={getAnswer}
      >
        <h1 style={{ color: "white" }}>{state}</h1>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default EightBall;
