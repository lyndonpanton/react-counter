import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
		const { author, copyright, name, year } = this.state;

		return (
			<div className="app">
				<Header name={name} />
				<Footer author={author} copyright={copyright} year={year} />
			</div>
		);
	};
};

export default App;