import React from "react";
import ReactDom from "react-dom";

import App from "./componets/App";
import "../styles/index.css";

const container = document.getElementById("container");

ReactDom.render(<App />, container);
