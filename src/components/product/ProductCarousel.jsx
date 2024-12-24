//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderSetting from 'src/utils/sliderSetting';
import ProductCard from './ProductCard';


const ProductCarousel = (props) => {

	return (
		<Slider {...sliderSetting}>
			{props.data?.map((item) => (
				<div className='p-content' key={item.id}>
					<ProductCard item={item} />
				</div>
			))}
		</Slider>
	);
}

export default ProductCarousel;