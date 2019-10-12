import React from "react";

const Button = (props) => {
	return (
		<button type={props.type} style={props.styling} onClick={props.handleClick}>{props.icon}</button>
	);
};

export default Button;