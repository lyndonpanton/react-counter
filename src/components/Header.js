import React from "react";

// as this component does not have state and is
// written using ES6 syntax it is known as a
// "stateless" component
const Header = (props) => {
	// this is a object which contains styling
	const headerStyling = {
		margin: 0,
		padding: "12px 0",
		backgroundColor: "#FA7600",
		color: "#FFFFFF"
	};

	const headingStyling = {
		margin: 0,
		textAlign: "center"
	};

	return (
		<header style={headerStyling}>
			{ /* in react you can add inline styling defined in an object */ }
			{ /* using the style attribute and add the style object */ }
			{ /* inside curly braces the curly braces are necessary as */ }
			{ /* it is javascript */ }

			{ /* the name property which was used on this component */ }
			{ /* when it was rendered from the app component is now */ }
			{ /* available for this component props which is a object */ }
			{ /* with keys, values pairs */ }
			<h1 style={headingStyling}>{props.name}</h1>
		</header>
	);
};

export default Header;