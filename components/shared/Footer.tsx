import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-green-900 py-8 text-center text-white font-medium uppercase text-xs">
			<div className="container">
				&copy; {year} JJC Scholarship. All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
