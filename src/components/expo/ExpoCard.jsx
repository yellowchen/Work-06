import { IconContext } from "react-icons";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import IntroButton from './../form/IntroButton';


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
					<div className='expo-card-img'>
						<img src={item.img} alt={item.name} />
					</div>
					<div className='card-content'>
						<h5 className='card-title title'>
							{item.name} / <small className='card-price'>${item.price}</small>
						</h5>
						<div className='card-txt'>
							<div className='card-date icon-form'>
								<FaRegCalendarDays />
								{item.startDate} {item.startMonth} — {item.endDate} {item.endMonth}
							</div>
							<div className='card-address icon-form'>
								<FaMapMarkerAlt />
								{item.address}
							</div>
						</div>

						<div className='card-btn'>
							<IntroButton item={item} />
						</div>
					</div>
				</div>
			))}
		</IconContext.Provider>
	);
}

export default Card;