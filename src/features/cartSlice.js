import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	// cartItems: localStorage.getItem("cartItems") 
	// 	? JSON.parse(localStorage.getItem("cartItems")) 
	// 	: [],
	cartItems: [],

	//indexProductId
	//cartQuantity
	// cartTotalQuantity: 0,
	// cartTotalAmount: 0,
	// cartTotalQuantity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			//old
			const { productId, name, img, price, quantity } = action.payload;
			const indexProductId = state.cartItems.findIndex((item) => item.productId === productId);

			indexProductId >= 0
				? (state.cartItems[indexProductId].quantity += quantity)
				: state.cartItems.push({ productId, name, img, price, quantity });

			console.log({...action.payload});

			//new
			// const indexProductId = state.cartItems.findIndex(
			// 	item => item.id === action.payload.id
			// );
			// console.log(indexProductId);

			// if (indexProductId >= 0) {
			// 	state.cartItems[indexProductId].cartQuantity++
			// }else {
			// 	const tempProduct = {...action.payload, cartQuantity: 1};
			// 	state.cartItems.push(tempProduct);
			// }
			// console.log({ ...action.payload });
		},

		//new
		// decreaseCart(state, action) {
		// 	const indexProductId = state.cartItems.findIndex((item) => item.id === action.payload.id);
		// 	if(state.cartItems[indexProductId].cartQuantity > 1) {
		// 		state.cartItems[indexProductId].cartQuantity--;
		// 	}else if (state.cartItems[indexProductId].cartQuantity === 1) {
		// 		//remove this item
		// 		const newCartItems = state.cartItems.filter(
		// 			(item) => item.id !== action.payload.id
		// 		);
		// 		state.cartItems = newCartItems;
		// 	}
		// },

		//old
		changeQuantity(state, action) {
			const { productId, quantity } = action.payload;
			const indexProductId = (state.cartItems).findIndex(item => item.productId === productId);
			quantity > 0
				? (state.cartItems[indexProductId].quantity = quantity)
				: (state.cartItems = (state.cartItems).filter(item => item.productId !== productId));
		},

		removeFromCart(state, action) {
			//old
			const { productId } = action.payload;
			const newCartItems = (state.cartItems).filter(item => item.productId !== productId);
			state.cartItems = newCartItems;

			// //new
			// const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
			// state.cartItems = newCartItems;
		},

		clearCart(state, action) {
			state.cartItems = [];
		},
	},
});




export default cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart, changeQuantity} = cartSlice.actions;