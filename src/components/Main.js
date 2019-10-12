import React from "react";
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
				<Counter count={count} />
			</main>
		);
	};
};

export default Main;