import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Data from "../assets/Data.json";
import { addToCart } from 'src/features/cartSlice';


const Detail = () => {
	const { slug } = useParams();
	console.log(slug);
	const [detail, setDetail] = useState([]); //useState裡先設空陣列，這樣detail才會是物件
	const [quantity, setQuantity] = useState(1);
	const history = useNavigate();

	//處理計算?
	useEffect(() => {
		const findDetail = Data.filter((item) => item.slug === slug);
		console.log(findDetail);

		//404畫面跳轉的沒有很順
		findDetail && findDetail.length > 0 
			? setDetail(findDetail[0]) 
			: (window.location.href = "/not-found");
	}, [slug]);

	//handleMinus
	const handleMinusQuantity = () => {
		setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
	};

	//handlePlus
	const handlePlusQuantity = () => {
		setQuantity(quantity + 1);
	};

	const dispatch = useDispatch();
	//addToCart
	const handleAddToCart = () => {
		dispatch(
			addToCart({
				productId: detail.id,
				name: detail.name,
				img: detail.img,
				price: detail.price,
				quantity: quantity,
			})

			// addToCart(cartItem)
		);
		history("/cart");
	};

	return (
		<div className='detail container'>
			{/* {Data.map((item) => (
				<img src={item.img} alt={item.name} width='300px' height='200px' />
			))} */}

			<h3 className='title-form'>Product Detail</h3>
			<div className='detail-item'>
				<div className='detail-img'>
					<img src={detail?.img} alt={detail?.name} />
				</div>
				<div className='detail-txt'>
					<div className='detail-title'>
						<h4 className='title'>
							{detail.name} / ${detail.price}
						</h4>
					</div>
					<div className='detail-btn'>
						<div className='quantity-btn'>
							<button className='btn' onClick={handleMinusQuantity}>
								-
							</button>
							<span>{quantity}</span>
							<button className='btn' onClick={handlePlusQuantity}>
								+
							</button>
						</div>
						<button className='btn btn-add' onClick={handleAddToCart}>
							Add To Cart
						</button>
					</div>
					<div className='detail-content'>
						<p>{detail?.content}</p>
					</div>
					<div className='prev-page'>
						<NavLink to='/product'>
							<button className='btn btn-prev btn-red'>Back</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;