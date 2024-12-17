import React, {useState} from 'react';

import Data from "../assets/Data.json";
import ProductCarousel from "src/components/product/ProductCarousel";


const Product = () => {
	const [action, setAction] = useState("Recent");

	const recentArray = Data.filter(item => item.type === "Recent");
	const recommendArray = Data.filter(item => item.type === "Recommend");
	const souvenirArray = Data.filter(item => item.type === "Souvenir");

    return (
		<div className='product container'>
			<ul className='p-menu title title-form'>
				<li className='p-list'>
					<h6
						className={`p-link ${action === "Recent" && "choose"}`}
						onClick={() => {
							setAction("Recent");
						}}
					>
						Recent Expo
					</h6>
				</li>
				<li className='p-list'>
					<h6
						className={`p-link ${action === "Recommend" && "choose"}`}
						onClick={() => {
							setAction("Recommend");
						}}
					>
						Recommend
					</h6>
				</li>
				<li className='p-list'>
					<h6
						className={`p-link ${action === "Souvenir" && "choose"}`}
						onClick={() => {
							setAction("Souvenir");
						}}
					>
						Souvenir
					</h6>
				</li>
			</ul>
			<div className='p-all'>
				{
					(() => {
						if (action === "Recent") {
							return <ProductCarousel data={recentArray} />;
						}else if (action === "Recommend") {
							return <ProductCarousel data={recommendArray} />;
						}else if (action === "Souvenir") {
							return <ProductCarousel data={souvenirArray} />;
						}
					})()
				}
			</div>
		</div>
	);
}

export default Product;