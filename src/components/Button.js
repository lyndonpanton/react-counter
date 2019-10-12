import React from "react";

const Button = (props) => {
	return (
		/* this element gets its styling from the props passed by its container */
		/* and its "onClick" attribute is actually a plain javascript event lister */
		/* so when the button is pressed the value (method) of the "handleClick" */
		/* which was passed to the component is called */
		<button type={props.type} style={props.styling} onClick={props.handleClick}>{props.icon}</button>
	);
};

export default Button;