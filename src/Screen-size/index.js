import React, { useState, useEffect } from "react";
import "./index.css";

export default function Screen() {
	const getWindowDimesions = () => {
		const { innerHeight: height, innerWidth: width } = window;
		return {
			width,
			height,
		};
	};

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimesions()
	);

	useEffect(() => {
		const resizeWindowDimensions = () => {
			setWindowDimensions(getWindowDimesions());
		};
		window.addEventListener("resize", resizeWindowDimensions);
		return () => {
			window.removeEventListener("resize", resizeWindowDimensions);
		};
	}, []);

	return (
		<div>
			<h1>Height: {windowDimensions.height}Px</h1>
			<h1>Width: {windowDimensions.width}Px</h1>
		</div>
	);
}
