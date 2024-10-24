import React from "react";

import * as TbIcon from "react-icons/tb";


const NotFound = () => {
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
			<TbIcon.TbMoodCry 
				size="60px"
			/>
		</div>
	);
};

export default NotFound;
