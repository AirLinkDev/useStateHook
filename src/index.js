import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


ReactDOM.render(<App />, document.getElementById("root"));

//Challenge:
//1. Given that you can get the current time using:
let time = new Date().toLocaleTimeString();
console.log(time);

