import React from 'react';
import { FaCheck } from "react-icons/fa6";


const ProgressBar = ({step}) => {
    const valueNow = (step -1) * 50;
	const btnStyle = {
		width: "40px",
		height: "40px",
		border: ".5px solid #fff",
	};

    return (
		<div className='w-50 mx-auto my-5'>
			<div className='position-relative'>
				<div
					className='progress bar-line'
					role='progressbar'
					aria-label='Progress'
					aria-valuemin='0'
					aria-valuemax='100'
					aria-valuenow={valueNow}
					style={{
						height: "3px",
					}}
				>
					<div
						className={`progress-bar w-${valueNow}`}
						style={{
							backgroundColor: "#000",
							transition: "all 10s ease-in-out",
						}}
					></div>
				</div>
				<button
					className={`
						position-absolute
						top-0
						start-0
						translate-middle
						rounded-pill
						${step >= 1 ? "btn-dark text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step > 1 ? <FaCheck /> : "1"}
				</button>
				<button
					className={`
						position-absolute
						top-0
						start-50
						translate-middle
						rounded-pill
						${step >= 2 ? "btn-dark text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step > 2 ? <FaCheck /> : "2"}
				</button>
				<button
					className={`
						position-absolute
						top-0
						start-100
						translate-middle
						rounded-pill
						${step >= 3 ? "btn-dark text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step > 3 ? <FaCheck /> : "3"}
				</button>
				<span className='position-absolute start-0 translate-middle-x mt-4'>
					Shopping Cart
				</span>
				<span className='position-absolute start-50 translate-middle-x mt-4'>
					Customer Info
				</span>
				<span className='position-absolute start-100 translate-middle-x mt-4'>
					Payment
				</span>
			</div>
		</div>
	);
}

export default ProgressBar