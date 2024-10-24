import React from 'react'

const IntroButton = () => {
    return (
		<div className='d-flex' style={{width: "13rem", gap: ".5rem"}}>
			<button type='button' className='btn btn-primary'>
				Buy Ticket
			</button>
			<button type='button' className='btn btn-primary' >
				More Info
			</button>
		</div>
	);
}

export default IntroButton;