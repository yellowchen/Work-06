import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from 'src/features/cartSlice';
//Other
import { IoCartOutline } from "react-icons/io5";


const Card = (props) => {

	// const carts = useSelector(store => store.cart.cartItems);
	const {id, name, img, slug, price} = props.item;


	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(
			addToCart({
				productId: id,
				name: name,
				img: img,
				price: price,
				quantity: 1,
			})
		);
	};

	return (
		<div className='product-card-item' key={id}>
			<Link to={slug}>
				<img src={img} alt={name}/>
			</Link>
			<div className='p-card-content'>
				<h6 className='title'>
					{name} / {price}
				</h6>
				<button className='p-add btn btn-red' onClick={handleAddToCart}>
					<IoCartOutline size='20px' color='#fff' />
				</button>
			</div>
		</div>
	);
}

export default Card;