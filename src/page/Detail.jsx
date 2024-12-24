import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Data from "../assets/Data.json";
import { addToCart } from 'src/features/cartSlice';


const Detail = () => {
	const history = useNavigate();
	const { slug } = useParams();
	console.log(slug);
	const [detail, setDetail] = useState([]); //useState裡先設空陣列，這樣detail才會是物件
	const [quantity, setQuantity] = useState(1);

	//處理slug
	useEffect(() => {
		const findDetail = Data.filter((item) => item.slug === slug);
		console.log(findDetail);

		findDetail?.length > 0 
			? setDetail(findDetail[0]) 
			: (window.location.href = "/not-found");
	}, [slug]);

		console.log(detail);

	//handleMinus
	const handleMinusQuantity = () => {
		setQuantity((quantity - 1) < 1 ? 1 : quantity - 1);
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
		);
		history("/product");
	};

	return (
		<div className='detail container'>
			<h3 className='title-form title'>{detail.name}</h3>
			<div className='detail-item'>
				<div className='detail-img'>
					<img src={detail?.img} alt={detail?.name} />
				</div>
				<div className='detail-txt'>
					<h4 className='detail-price'>
						${detail.price}
					</h4>
					<div className='detail-btn'>
						<div className='quantity-btn'>
							<button className='btn left-btn' onClick={handleMinusQuantity}>
								-
							</button>
							<span>{quantity}</span>
							<button className='btn right-btn' onClick={handlePlusQuantity}>
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