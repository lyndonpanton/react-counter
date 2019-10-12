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
			<p>&copy; 2019 Lyndon Panton | All Rights Reserved</p>
		</footer>
	);
};

export default Footer;