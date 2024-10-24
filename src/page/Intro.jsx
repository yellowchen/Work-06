import React from 'react';

import IntroData from "../assets/introData.json";


const Intro = () => {
    return (
		///整理className
		<div className='intro container'>
			<div className='intro-nav'>
				<h5>Intro</h5>
				<ul className='intro-menu title'>
					{IntroData.map((item) => (
						<li key={item.id} className='intro-list'>
							<a href={"#" + item.id}>{item.id}</a>
						</li>
					))}
				</ul>
			</div>
			<div className='intro-content'>
				{IntroData.map((item) => (
					<div key={item.id} className='intro-item'>
						<div className='title' id={item.id}>
							<h4>{item.id}</h4>
						</div>
						<p>
							<img src={item.img} alt='' />
							{item.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}



export default Intro;