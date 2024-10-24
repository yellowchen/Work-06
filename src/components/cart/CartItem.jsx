import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import productData from "../../assets/shopProduct.json";
import { removeFromCart, changeQuantity } from 'src/features/cartSlice';
import * as FaIcon from "react-icons/fa";



const CartItem = (props) => {
	console.log(props);
	const { productId, name, img, price, quantity } = props.data;
	//這邊的data是<Cart>中，<CartItem data={item}>
	console.log(props.data);

	const dispatch = useDispatch();

	// //create initial value for the detail
	// //用productData跟props.data做比較，傳進detail
	// const [detail, setDetail] = useState([]);
	// useEffect(() => {
	// 	const findDetail = productData.filter((item) => item.id === productId)[0];
	// 	setDetail(findDetail);
	// }, [productId]);
	// console.log(detail);  //從productData引入，有最完整的資料

	const handleMinusQuantity = () => {
		dispatch(
			changeQuantity({
				productId: productId,
				quantity: quantity - 1,
			})
			// decreaseCart(cartItem)
		);
	};

	const handlePlusQuantity = () => {
		dispatch(
			changeQuantity({
				productId: productId,
				quantity: quantity + 1,
			})
			// addToCart(cartItem)
		);
	};

	const handleRemoveFromCart = () => {
		dispatch(
			removeFromCart({
				productId: productId,
			})
			// removeFromCart()
		);
	};

	return (
		<div className='cart-item'>
			<div className='cart-img'>
				<img src={img} alt={name} />
			</div>
			<div className='cart-content'>
				<h6 className='cart-item-title title'>
					{name} / ${price}
				</h6>
				<div className='cart-btn'>
					<button className='btn' onClick={handleMinusQuantity}>
						-
					</button>
					<span>{quantity}</span>
					<button className='btn' onClick={handlePlusQuantity}>
						+
					</button>
				</div>
			</div>
			<div className='cart-item-total'>
				{/* <button className='btn btn-del' onClick={handleRemoveFromCart}>
					<FaIcon.FaTrash size='24px' color='#e34b54' />
				</button> */}
				<h5 className='cart-total'>${price * quantity}</h5>
			</div>
			<button className='btn btn-del' onClick={handleRemoveFromCart}>
				<FaIcon.FaTrash size='24px' color='#e34b54' />
			</button>
		</div>
	);
}

export default CartItem;