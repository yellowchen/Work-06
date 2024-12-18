import React from "react";

import { TbMoodCry } from "react-icons/tb";


const NotFound = () => {
	var segmentCount = 0;
	var l = window.location;
	l.replace(
		l.protocol +
			"//" +
			l.hostname +
			(l.port ? ":" + l.port : "") +
			l.pathname
				.split("/")
				.slice(0, 1 + segmentCount)
				.join("/") +
			"/?p=/" +
			l.pathname.slice(1).split("/").slice(segmentCount).join("/").replace(/&/g, "~and~") +
			(l.search ? "&q=" + l.search.slice(1).replace(/&/g, "~and~") : "") +
			l.hash
	);

	return (
		<div className='not-found container' style={{ 
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: ".5rem",
			}}>
			<h2>404</h2>
			<p>Page not found</p>
			<TbMoodCry 
				size="60px"
			/>
		</div>
	);
};

export default NotFound;
