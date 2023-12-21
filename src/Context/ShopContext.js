import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

function getDefaultCart() {
	const cart = {};
	for (let index = 0; index < all_products.length; index++) {
		cart[index] = 0;
	}
	return cart;
}

const ShopContextProvider = props => {
	const [cartItems, setCartItems] = useState(getDefaultCart());
	const addToCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};
	const removeFromCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 < 0 ? 0 : prev[itemId] - 1 }));
	};
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				const product = all_products.find(product => product.id === Number(item));
				totalAmount += product.new_price * cartItems[item];
			}
		}
		return totalAmount;
	};
	const getTotalCartItems = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalAmount += cartItems[item];
			}
		}
		return totalAmount;
	};
	const contextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };
	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
export default ShopContextProvider;
