import React, {useState} from 'react';

import expoData from "../assets/shopExpo.json";
import ExpoCard from 'src/components/expo/ExpoCard';


const Expo = () => {
	const [action, setAction] = useState("Recent");

	const recentArray = expoData.filter((item) => item.type === "Recent");
	const recommendArray = expoData.filter((item) => item.type === "Recommend");
	
	
    return (
		<div className='expo container'>
			<div className='expo-nav'>
				<h4
					className={action === "Recent" ? "expo-menu underline" : "expo-menu"}
					onClick={() => {
						setAction("Recent");
					}}
				>
					Recent
				</h4>
				<h4
					className={action === "Recommend" ? "expo-menu underline" : "expo-menu"}
					onClick={() => {
						setAction("Recommend");
					}}
				>
					Recommend
				</h4>
			</div>
			<div className='expo-content'>
				{action === "Recent" ? (
						<ExpoCard data={recentArray} />
					) : (
						<ExpoCard data={recommendArray} />
					)}
			</div>
		</div>
	);
}

export default Expo;


