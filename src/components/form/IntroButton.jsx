// import React from 'react';
import { Link } from 'react-router-dom';

const IntroButton = ({item}) => {
	console.log(item);

	// const btnStyle = {
	// 	display: "block",
	// };
    return (
		<div className='d-flex' style={{ width: "13rem", gap: ".5rem" }}>
			<Link to='/product' role='button' className='btn btn-primary'>
				Buy Ticket
			</Link>
			<Link to={`/product/${item.slug}`} role='button' className='btn btn-primary'>
				More Info
			</Link>

			{/* <button type='button' className='btn btn-primary'>
				<Link to='/product' style={{ display: "block", border: "1px solid red" }}>
					Buy Ticket
				</Link>
			</button>
			<button type='button' className='btn btn-primary'>
				<Link to={`/product/${item.slug}`}>More Info</Link>
			</button> */}
		</div>
	);
}

export default IntroButton;