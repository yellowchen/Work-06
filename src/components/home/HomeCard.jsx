import React from 'react';
import { Link } from 'react-router-dom';

import { FaSquareFacebook } from "react-icons/fa6";
// import IntroButton from '../form/IntroButton';


const Card = ({data}) => {
    return (
		<>
			{data.map((item) => (
				<div className='home-card-item' key={item.id}>
					<div className='home-card-img'>
						<img src={item.img} alt={item.name}/>
					</div>
					<div className='home-card-content'>
						<div className='card-txt'>
							<h4 className='title'>
								{item.name}
								<span>/</span>
								<h6>${item.price}</h6>
							</h4>
							<p>{item.content}</p>
							<div className='card-btn'>
								{/* <IntroButton /> */}
								<div className='d-flex' style={{ width: "13rem", gap: ".5rem" }}>
									<button type='button' className='btn btn-primary'>
										<Link to="/product">Buy Ticket</Link>
									</button>
									<button type='button' className='btn btn-primary'>
										<Link to={`/product/${item.slug}`}>More Info</Link>
									</button>
								</div>
							</div>
						</div>
						<div className='card-side'>
							<div className='card-date'>
								<h6>{item.startDate}</h6>
								<h6>{item.startMonth}</h6>
								<h6>|</h6>
								<h6>{item.endDate}</h6>
								<h6>{item.endMonth}</h6>
							</div>
							<FaSquareFacebook size='30px' style={{ marginTop: "auto" }} />
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default Card;