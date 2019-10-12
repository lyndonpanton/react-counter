import React from "react";
import Header from "./Header";

import "../assets/styles/main.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			copyright: "All Rights Reserved",
			name: "React Counter",
			year: (new Date()).getFullYear()
		};
	};

	render() {
		const { name } = this.state;

		return (
			<div className="app">
				<Header name={name} />
			</div>
		);
	};
};

export default App;