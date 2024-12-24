import { useDispatch } from 'react-redux';

import { removeFromCart, changeQuantity } from 'src/features/cartSlice';
import {FaTrash} from "react-icons/fa";
import thousandFormat from 'src/utils/thousandFormat';


const CartItem = (props) => {
	console.log(props);
	const { productId, name, img, price, quantity } = props.data;
	//這邊的data是<Cart>中，<CartItem data={item}>
	console.log(props.data);

	const dispatch = useDispatch();
	const handleMinusQuantity = () => {
		dispatch(
			changeQuantity({
				productId: productId,
				quantity: quantity - 1,
			})
		);
	};

	const handlePlusQuantity = () => {
		dispatch(
			changeQuantity({
				productId: productId,
				quantity: quantity + 1,
			})
		);
	};

	const handleRemoveFromCart = () => {
		dispatch(
			removeFromCart({
				productId: productId,
			})
		);
	};

	return (
		<div className='cart-item'>
			<div className='cart-img'>
				<img className='rounded-2' src={img} alt={name} />
			</div>
			<div className='cart-content'>
				<h6 className='cart-item-title title'>
					{name} / 
					${price}
				</h6>
				<div className='quality-btn'>
					<button className='btn left-btn' onClick={handleMinusQuantity}>
						-
					</button>
					<span>{quantity}</span>
					<button className='btn right-btn' onClick={handlePlusQuantity}>
						+
					</button>
				</div>
			</div>
			<div className='cart-item-total'>
				<h5 className='cart-total'>${thousandFormat(price * quantity)}</h5>
			</div>
			<button className='btn btn-del' onClick={handleRemoveFromCart}>
				<FaTrash size='24px' color='#e34b54' />
			</button>
		</div>
	);
}

export default CartItem;