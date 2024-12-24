import ProgressBar from 'src/utils/ProgressBar';
import CustomerInfoForm from 'src/components/cart/CustomerInfoForm';
import CartInfo from 'src/components/cart/CartInfo';
import CustomerInfoFormButton from 'src/components/cart/CustomerInfoFormButton';


const Checkout = () => {
    return (
		<div 
			className='container d-flex flex-column checkout' 
			style={{ gap: "5vw" }}
		>
			<ProgressBar step={2} />
			<div className='cart-all'>
				<CustomerInfoForm />
				<CartInfo />
			</div>
			<div className='cart-btn'>
				<CustomerInfoFormButton />
			</div>
		</div>
	);
}

export default Checkout