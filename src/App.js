import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [red, setRed] = useState(true);
  const [blue, setBlue] = useState(true);
  const [green, setGreen] = useState(true);

  return (
    <>
      <div className="dflexx">
        <div
          className="divBorder"
          style={{ backgroundColor: `${red ? "white" : "red"}` }}
        ></div>
        <div
          className="divBorder"
          style={{ backgroundColor: `${blue ? "white" : "blue"}` }}
        ></div>
        <div
          className="divBorder"
          style={{ backgroundColor: `${green ? "white" : "green"}` }}
        ></div>
      </div>

      <div style={{display:"flex",justifyContent:"space-around",marginTop:"1rem"}}>
        <button onClick={() => setRed(!red)}>{red ? "Red" : "reset"}</button>
        <button onClick={() => setBlue(!blue)}>
          {blue ? "Blue" : "Reset"}
        </button>
        <button onClick={() => setGreen(!green)}>
          {green ? "Green" : "Reset"}
        </button>
      </div>
    </>
  );
};

export default App;
