import React from 'react'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

import { IconList } from 'src/data/ListData';

const Footer = () => {

    return (
		<div className='footer container'>
			<div className='service'>
				<div className='company'>
					<h5>Life Museum</h5>
					<h5>Open 10:00 - 17:30</h5>
					<h5>0800-000-000</h5>
					<h5>contact@lifemuseum.com</h5>
				</div>
				<div className='social-media'>
					<IconContext.Provider value={{ color: "#fff", size: "30" }}>
						<ul>
							{IconList.map((item) => (
								<Link to={item.path} target='_blank'>
									<li key='item.id'>{item.icon}</li>
								</Link>
							))}
						</ul>
					</IconContext.Provider>
				</div>
			</div>
			<div className='copyright'>
				<h6>© Copyright Life Museum All right Reserved.</h6>
				<h6>本網站為技術練習作品，不具任何商業行為</h6>
			</div>
		</div>
	);
};

export default Footer;