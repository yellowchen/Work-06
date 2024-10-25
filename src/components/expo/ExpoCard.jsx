import React from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from "react-icons";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

// import IntroButton from '../form/IntroButton';


const Card = ({data}) => {
    return (
		<IconContext.Provider
			value={{
				size: "16px",
				style: {
					marginRight: "0.5rem",
				},
			}}
		>
			{data.map((item) => (
				<div className='expo-card-item' key={item.id}>
					<img src={item.img} alt={item.name} />
					<div className='card-content'>
						<h5 className='card-title title'>{item.name}</h5>
						<div className='card-txt'>
							<div className='card-date card-form'>
								<FaRegCalendarDays />
								{item.startDate} {item.startMonth} — {item.endDate} {item.endMonth}
							</div>
							<div className='card-address card-form'>
								<FaMapMarkerAlt />
								{item.address}
							</div>
						</div>
						<h5 className='card-price'>${item.price}</h5>
						<div className='card-btn'>
							{/* <IntroButton data={item}/> */}
							<div className='d-flex' style={{ width: "13rem", gap: ".5rem" }}>
								<button type='button' className='btn btn-primary'>
									<Link to='/product'>Buy Ticket</Link>
								</button>
								<button type='button' className='btn btn-primary'>
									<Link to={`/product/${item.slug}`}>More Info</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</IconContext.Provider>
	);
}

export default Card;