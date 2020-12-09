import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./common.scss";
import "./reset.scss";
import Login from "./Pages/ara/Login.js/Login";
import Main from "./Pages/ara/Main.js/Main";
import Routes from "./Routes.js";

// ReactDOM.render(<Login />,document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById("root"));

//인자 두개를 받음 App은 App이라는 App.js에구현된 기능을  root값을
