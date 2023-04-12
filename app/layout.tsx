import "./../styles/globals.css";
import React from "react";

const RootLayout = ({ children, pageProps }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
