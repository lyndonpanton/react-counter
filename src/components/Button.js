import React from "react";

const Button = (props) => {
	return (
		<button onClick={props.handleClick}>Decrement/Increment</button>
	);
};

export default Button;