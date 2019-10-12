import React from "react";

const Header = (props) => {
	const headerStyling = {
		margin: 0,
		padding: "5px 0",
		backgroundColor: "#FA7600",
		color: "#FFFFFF"
	};

	const headingStyling = {
		margin: 0,
		textAlign: "center"
	};

	return (
		<header style={headerStyling}>
			<h1 style={headingStyling}>{props.name}</h1>
		</header>
	);
};

export default Header;