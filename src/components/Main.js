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