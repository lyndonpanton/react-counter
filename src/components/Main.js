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

		return (
			<main>
				<Button />
				<Counter count={count} />
				<Button />
				<Button />
			</main>
		);
	};
};

export default Main;