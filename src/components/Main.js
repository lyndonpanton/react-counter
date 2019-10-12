import React from "react";
import Button from "./Button";
import Counter from "./Counter";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	};

	handleDecrement = () => {
		const count = this.state.count;

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

		return (
			<main style={mainStyling}>
				<Button />
				<Counter count={count} />
				<Button />
				<Button />
			</main>
		);
	};
};

export default Main;