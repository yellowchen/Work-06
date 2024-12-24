import { Link } from 'react-router-dom';

const IntroButton = ({item}) => {
    return (
		<div className='d-flex' style={{ width: "13rem", gap: ".5rem" }}>
			<Link to='/product' role='button' className='btn btn-primary'>
				Buy Ticket
			</Link>
			<Link to={`/product/${item.slug}`} role='button' className='btn btn-primary'>
				More Info
			</Link>
		</div>
	);
}

export default IntroButton;