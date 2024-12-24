import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		//add
		addToCart(state, action) {
			const { productId, name, img, price, quantity } = action.payload;
			const indexProductId = (state.cartItems).findIndex(item => item.productId === productId);

			indexProductId >= 0
				? (state.cartItems[indexProductId].quantity += quantity)
				: state.cartItems.push({ productId, name, img, price, quantity });

			console.log({...action.payload});
		},

		//change
		changeQuantity(state, action) {
			const { productId, quantity } = action.payload;
			const indexProductId = (state.cartItems).findIndex(item => item.productId === productId);

			quantity > 0
				? (state.cartItems[indexProductId].quantity = quantity)
				: (state.cartItems = (state.cartItems).filter(item => item.productId !== productId));
		},

		//remove
		removeFromCart(state, action) {
			const { productId } = action.payload;
			const newCartItems = (state.cartItems).filter(item => item.productId !== productId);
			state.cartItems = newCartItems;
		},

		//clearAll
		clearCart(state, action) {
			state.cartItems = [];
		},
	},
});


export default cartSlice.reducer;
export const { addToCart, changeQuantity, removeFromCart, clearCart } = cartSlice.actions;