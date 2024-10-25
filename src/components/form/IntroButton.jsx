import React from 'react';
import { Link } from 'react-router-dom';

const IntroButton = (item) => {
	console.log(item);
    return (
		<div className='d-flex' style={{ width: "13rem", gap: ".5rem" }}>
			<button type='button' className='btn btn-primary'>
				<Link to={item.slug}>
					Buy Ticket
				</Link>
			</button>
			<button type='button' className='btn btn-primary'>
				More Info
			</button>
		</div>
	);
}

export default IntroButton;