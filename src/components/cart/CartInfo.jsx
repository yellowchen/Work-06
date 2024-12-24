import { useSelector } from 'react-redux';
import thousandFormat from 'src/utils/thousandFormat';

const CartInfo = () => {
    const carts = useSelector((store) => store.cart.cartItems);
	console.log(carts);
	const subTotal = carts.reduce((total, item) => (total = total + item.quantity * item.price), 0);

    return (
		<div className='cart-grand-total border-gray'>
			<div className='cart-title'>
				<h4>Booking Information</h4>
			</div>
			<div className='p-2'>
				<table className='table table-responsive'>
					<thead>
						<tr>
							<th scope='col' className='border-bottom px-0 text-center'>
								<h6>Item</h6>
							</th>
							<th scope='col' className='border-bottom'></th>
							<th scope='col' className='border-bottom px-1 text-center'>
								<h6>Quantity</h6>
							</th>
							<th scope='col' className='border-bottom px-1 text-end'>
								<h6>Amount</h6>
							</th>
						</tr>
					</thead>
					<tbody>
						{carts?.map((item) => (
							<tr className='border-bottom border-2' key={item.id}>
								<th
									scope='row'
									className='cart-img px-0 align-middle text-center'
									style={{ width: "105px" }}
								>
									<img
										src={item.img}
										alt={item.name}
										className='rounded-2'
										style={{ maxWidth: "100px", aspectRatio: "3/2" }}
									/>
								</th>
								<td className='align-middle text-start'>
									<h6 className='title'>{item.name}</h6>
									<h6>/ ${item.price}</h6>
								</td>
								<td className='align-middle text-center'>
									<h6>{item.quantity}</h6>
								</td>
								<td className='align-middle text-end'>
									<h6>${thousandFormat(item.quantity * item.price)}</h6>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className='d-flex justify-content-end gap-5 pe-2'>
					<h4>SubTotal</h4>
					<h4 className='text-danger'>${thousandFormat(subTotal)}</h4>
				</div>
			</div>
		</div>
	);
}

export default CartInfo;