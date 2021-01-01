import React from "react";
import ReactDom from "react-dom";
import Component from "./Component";
import "../styles/style.css";
import "../styles/style.scss";

const App = () => {
  return (
    <>
      <div>App</div>
      <Component />
    </>
  );
};

export const sampleFuncToTest = (a: number, b: number) => a + b;

export default App;
