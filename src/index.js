import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ReactDOM is for working with the browser display
// the render method is for displaying elements, components
ReactDOM.render(
	<App />, // this component is placed inside...
	document.getElementById("root") // ...this element in the html file
);