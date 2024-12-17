// import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerInfoFormButton = () => {
    const navigation = useNavigate();
    return (
		<div className='d-flex gap-3 align-self-center align-self-md-end'>
			<button
				type='button'
				className='prev-btn btn btn-primary'
				style={{ width: "6rem" }}
				onClick={() => navigation(-1)}
				form='customerInfoForm'
			>
				Prev Page
			</button>
			<button
				className='next-btn btn btn-primary'
				style={{ width: "6rem" }}
				type='submit'
				onClick={() => navigation(+1)}
				form='customerInfoForm'
			>
				Complete
			</button>
		</div>
	);
}

export default CustomerInfoFormButton;