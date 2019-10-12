import React from "react";

const Counter = (props) => {
	return (
		<div className="counter">
			<p>{props.count}</p>
		</div>
	);
};

export default Counter;