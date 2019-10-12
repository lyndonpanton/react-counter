import React from "react";
import Button from "./Button";
import Counter from "./Counter";

class Main extends React.Component {
	constructor(props) {
		super(props);
		/* the count property is used to keep track of the
		** count which is displayed in the browser
		*/
		this.state = {
			count: 0
		};
	};

	/* this is a method of this component and uses ES6 syntax
	** so no additional binding is required, when it is called
	** it decreases the count property inside the state
	*/
	handleDecrement = () => {
		const count = this.state.count;

		/* the state cannot be changed using normal expressions 
		** instead this method is used to changed it
		*/
		this.setState({
			count: count - 1
		});
	};

	handleIncrement = () => {
		const count = this.state.count;

		this.setState({
			count: count + 1
		});
	};

	handleReset = () => {
		this.setState({
			count: 0
		});
	};

	render() {
		const count = this.state.count;

		const mainStyling = {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-around",
			alignItems: "center",

			margin: "40px 0",
			padding: "10px 20%",
			fontSize: "20px"
		};

		const minusStyling = {
			border: "#000000 solid 1px",
			borderRadius: "5px",
			width: "40px",
			height: "40px",
			backgroundColor: "#FF0000",
			color: "#FFFFFF"
		};

		/* This is ES5 syntax which first creates an empty object,
		** then the object in the second parameter overides any
		** properties in shares with the first object and adds any
		** new properties, the third object then overrides the
		** properties in that combined object and addes any
		** new properties
		*/
		const plusStyling = Object.assign({}, minusStyling, {
			backgroundColor: "#00FF00"
		});

		const resetStyling = {
			flexBasis: "100%",

			border: "#000000 solid 1px",
			borderRadius: "5px",
			marginTop: "10px",
			padding: "10px 0",
			backgroundColor: "#0000FF",
			color: "#FFFFFF"
		};

		return (
			<main style={mainStyling}>
				{ /* the handleClick property is passed the buttons respective method */ }
				{ /* and can now be used by the component it is passed to */ }
				<Button type="minus" icon="-" styling={minusStyling} handleClick={this.handleDecrement} />
				<Counter count={count} />
				<Button type="plus" icon="+" styling={plusStyling} handleClick={this.handleIncrement} />
				<Button type="reset" icon="reset" styling={resetStyling} handleClick={this.handleReset} />
			</main>
		);
	};
};

export default Main;