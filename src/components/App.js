import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../assets/styles/main.css";

// this is an ES6 class which defines a template
// for a component
// this is known as a "Stateful Component" as it has a constructor
// with a state
class App extends React.Component {
	constructor(props) {
		// super gets the properties, methods of the extended class
		// (React.Component) and applies them to the current on
		// (App), this enables the use of state in a component
		super(props);
		// a component 
		this.state = {
			author: "Lyndon Panton",
			copyright: "All Rights Reserved",
			name: "React Counter",
			year: (new Date()).getFullYear()
		};
	};

	render() {
		// this is ES6 syntax known as destructuring and it applies
		// the respective values in this.state to the defined variables
		const { author, copyright, name, year } = this.state;
		// so the author variable is set to this.state.author
		// the copyright variable is set to this.state.copyright
		// the name variable is set to this.state.name
		// the year variable is set to this.state.year

		// the syntax ES6 is equivalent to...
		// const author = this.state.author;
		// const copyright = this.state.copyright;
		// const name = this.state.name;
		// const year = this.state.year;

		// this is what is returned when you add a component to html
		return (
			// as class is a reserved keyword in javascript to add classes
			// to element you must use the "className" attribute instead
			// use the id attribute the same as you would in html
			<div className="app">
				{ /* curly braces are used to insert javascript in html*/ }
				{ /* when inside the return method as you cannot use comments */ }
				{ /* (html or javascript) when inside the render method */ }

				{/* this renders the header component added sends the name */ }
				{ /* value inside this component as a prop in the header component */ }
				<Header name={name} />
				<Main />
				<Footer author={author} copyright={copyright} year={year} />
			</div>
		);
	};
};

export default App;