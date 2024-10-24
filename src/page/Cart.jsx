import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from 'src/components/cart/CartItem';
import { clearCart} from 'src/features/cartSlice';
import * as Fa6Icons from "react-icons/fa6";
import  ProgressBar from 'src/components/cart/ProgressBar';



const Cart = () => {

    const carts = useSelector(store => store.cart.cartItems);
	console.log(carts);

	const subTotal = carts.reduce((total, item) => total = total + item.quantity * item.price, 0);
	console.log(subTotal);

	const dispatch = useDispatch();
	const handleRemoveFromCart = () => {
		dispatch(clearCart())
	};

    return (
		<div className='cart container'>
			<ProgressBar step={1}/>
			{carts.length === 0 ? (
				<div className='cart-empty'>
					<h6>Your cart is currently empty.</h6>
					<h6 className='start-shopping'>
						<Link to='/product'>
							<Fa6Icons.FaArrowRight className='arrow-right' size='20' color='#e34b54' />
							<span> Start Shopping</span>
						</Link>
					</h6>
				</div>
			) : (
				<div className='cart-all'>
					<div className='cart-main'>
						<div className='cart-detail'>
							<div className='cart-title'>
								<h4>Shopping List</h4>
								<button className='btn btn-del-all btn-red' onClick={handleRemoveFromCart}>
									DeleteAll
								</button>
							</div>
							{carts.map((item) => (
								<CartItem
									key={item.id}
									data={item}
									//data等於傳進的item
								/>
							))}
						</div>

						{/* <div className='cart-coupon'>
							<div className='cart-title'>
								<h4>COUPON</h4>
							</div>
							<div className='cart-content'>
								<p>OOO</p>
							</div>
						</div> */}
					</div>

					<div className='cart-grand-total'>
						<div className='cart-title'>
							<h4>Info</h4>
						</div>
						<div className='cart-content'>
							<div className='grand-total d-flex justify-content-between'>
								<h4>訂單總計</h4>
								<h4>{subTotal}</h4>
							</div>
							<div className='cart-btn'>
								<button className='btn btn-primary'>
									<Link to='/'>Cotinue Shopping</Link>
								</button>
								<button className='btn btn-primary'>
									<Link to='/checkout'>Pay</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;