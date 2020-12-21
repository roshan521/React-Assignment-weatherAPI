import React from "react";
import ReactDOM from "react-dom";
import Tempapp from "./temp";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `${100}vw`,
  height: 100 + "vh",
};

function App() {
  return (
    <>
      <div style={container}>
        <Tempapp />
      </div>
    </>
  );
}

export default App;
