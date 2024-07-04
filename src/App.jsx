import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// use class level compoment instead of fuction level components 
function App() {
  const [weight, setWeight] = useState("null");  // it should be out of quotes, "null" : this is string
  const [height, setHeight] = useState("null");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [message, setBmiMessage] = useState("");

// Good code practice : always seperate 2 different fuction with extra line 
  function calculateBmi() {
    let height2 = height * height;
    const result = weight / height2;
    setBmi("BMI are : "+result.toFixed(2));
    let message = "";
    if (result < 18.5) {
      message = "Underweight";
    } else if (result >= 18.5 && result <= 24.9) {
      message = "Normal weight";
    } else if (result >= 25 && result <= 29.9) {
      message = "Overweight";
    } else if (result >= 30) {
      message = "Obesity";
    }
    setBmiMessage('You are '+ message);
  }

  function reset() {
    setWeight("");
    setHeight("");
    setBmi("");
    setStatus("");
    setBmiMessage("");
  }


  return (
    <>
      <div className="bmi-calculator">
        <div>
          <h1 id="heading">BMI CALCULATOR App</h1>
          <p id="weight">Weight(kg) :</p>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter Width"
          ></input>
          <p id="height">Height(meter) :</p>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter Height"
          ></input>
          <br></br>
          <button
            type="button"
            className="btn btn-primary"
            id="btn"
            onClick={calculateBmi}
          >
            Calculate
          </button>
          <button
            type="button"
            className="btn btn-primary"
            id="reset-btn"
            onClick={reset}
          >
            Reset
          </button>
          <div className="bmi-status">
            <center><h5 id="bmi-num">{bmi}</h5></center>
            <center><h5 id="status">{message}</h5></center>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
