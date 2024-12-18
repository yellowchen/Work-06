import React, {useState} from 'react';

import Data from "src/assets/Data.json";
import ExpoCard from 'src/components/expo/ExpoCard';


const Expo = () => {
	const [action, setAction] = useState("Recent");
	
	const recentArray = Data.filter((item) => item.type === "Recent");
	const recommendArray = Data.filter((item) => item.type === "Recommend");
	
    return (
		<div className='expo container'>
			<div className='expo-nav'>
				<h4
					className={action === "Recent" && "underline"}
					onClick={() => {
						setAction("Recent");
					}}
				>
					Recent
				</h4>
				<h4
					className={action === "Recommend" && "underline"}
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


