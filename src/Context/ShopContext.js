import React, { createContext, useContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

function getDefaultCart() {
	const cart = {};
	for (let index = 0; index < 300; index++) {
		cart[index] = 0;
	}
	return cart;
}

const ShopContextProvider = props => {
	const [all_products, setAllProducts] = useState([]);
	const [cartItems, setCartItems] = useState(getDefaultCart());
	useEffect(() => {
		fetch("http://localhost:4000/allproducts")
			.then(response => response.json())
			.then(data => {
				setAllProducts(data);
			});

		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/getcart", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"auth-token": localStorage.getItem("auth-token"),
					"Content-Type": "application/json",
				},
				body: "",
			})
				.then(response => response.json())
				.then(data => setCartItems(data));
		}
	}, []);

	const addToCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/addtocart", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"auth-token": `${localStorage.getItem("auth-token")}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ itemId: itemId }),
			})
				.then(response => response.json())
				.then(data => {
					console.log(data);
				});
		}
	};
	const removeFromCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 < 0 ? 0 : prev[itemId] - 1 }));
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/removefromcart", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"auth-token": `${localStorage.getItem("auth-token")}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ itemId: itemId }),
			})
				.then(response => response.json())
				.then(data => {
					console.log(data);
				});
		}
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
