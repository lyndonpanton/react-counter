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

		const minusStyling = {
			border: "#000000 solid 1px",
			borderRadius: "5px",
			width: "40px",
			height: "40px",
			backgroundColor: "#FF0000",
			color: "#FFFFFF"
		};

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
				<Button />
				<Counter count={count} />
				<Button />
				<Button />
			</main>
		);
	};
};

export default Main;