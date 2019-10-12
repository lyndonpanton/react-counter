import React from "react";

const Footer = (props) => {
	const footerStyling = {
		padding: "80px",
		backgroundColor: "#F8F8F8",
		textAlign: "center",
		color: "#777777"
	};

	return (
		<footer style={footerStyling}>
			{ /* this uses props sent from its container component */ }
			<p>&copy; {props.year} {props.author} | {props.copyright}</p>
		</footer>
	);
};

export default Footer;