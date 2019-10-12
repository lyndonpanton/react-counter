import React from "react";
import Header from "./Header"

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
		return (
			<div className="app">
				<Header />
			</div>
		);
	};
};

export default App;