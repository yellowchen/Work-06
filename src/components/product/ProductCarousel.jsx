import React from 'react'

//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//PostCard
import ProductCard from './ProductCard';


const ProductCarousel = (props) => {

	//SliderSetting
	const sliderSetting = {
		dots: true, //項目點點，預設為false
		infinite: true, //是否要loop，預設為true
		speed: 500, //自動播放的切換速率，單位毫秒
		easing: "linear", //滑動效果頻率，和animate設定值一樣，預設為linear
		slidesToShow: 3, //一次顯示幾張
		slidesToScroll: 1, //按下一頁的時候，要跑幾張
		autoplay: true, //自動播放
		autoplaySpeed: 3000,
		arrows: false, //上下箭頭，預設為true
		centerMode: true, //前一張與後一張出現一部分
		centerPadding: "56px", //預設是出現50px
		responsive: [
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

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