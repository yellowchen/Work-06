import { FaCheck } from "react-icons/fa6";


const ProgressBar = ({step}) => {
    const valueNow = (step -1) * 50;
	
	const btnStyle = {
		width: "40px",
		height: "40px",
		border: ".5px solid #fff",
		fontWeight: "900",
	};

	const wordStyle = {
		width: "45%",
		textAlign: "center",
		marginTop: "1.25rem",
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
							transition: "all 2s ease-in-out",
						}}
					></div>
				</div>
				{/* 進度1 */}
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
				{/* 進度2 */}
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
				{/* 進度3 */}
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

				{/* 進度文字 */}
				<h6 className='position-absolute start-0 translate-middle-x' style={wordStyle}>
					Shopping Cart
				</h6>
				<h6 className='position-absolute start-50 translate-middle-x' style={wordStyle}>
					Customer Info
				</h6>
				<h6 className='position-absolute start-100 translate-middle-x' style={wordStyle}>
					Payment
				</h6>

			</div>
		</div>
	);
}

export default ProgressBar