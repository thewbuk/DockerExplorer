import "./../styles/globals.css";
import React from "react";

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

const RootLayout = ({ children, pageProps }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;