export const Spinner = ({isLoading}) => {
    return (
		<div className={`spinner-bg d-${isLoading ? `flex` : `none`}`}>
			<div className='spinner-border text-primary' role='status'></div>
			<span className='visually-hidden'>Loading...</span>
		</div>
	);
};
