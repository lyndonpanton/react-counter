import React from "react";

const Counter = (props) => {
	return (
		<div className="counter">
			{ /* the count prop is displayed here and is updated when */ }
			{ /* the state of the component it belongs to updates */ }
			<p>{props.count}</p>
		</div>
	);
};

export default Counter;