import styles from "./CartItems.module.scss";
import classNames from "classnames/bind";
import { ShopContext } from "../../Context/ShopContext";

import { useContext } from "react";
import remove_icon from "../Assets/cart_cross_icon.png";

const cx = classNames.bind(styles);

function CartItems() {
	const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

	return (
		<div className={cx("cartitems")}>
			<div className={cx("cartitems-format-main")}>
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr></hr>
			{all_products.map((item, index) => {
				if (cartItems[item.id] > 0) {
					return (
						<div key={index}>
							<div className={cx("cartitems-format", "cartitems-format-main")}>
								<img className={cx("cartitems-product-icon")} src={item.image} alt=""></img>
								<p>{item.name}</p>
								<p>${item.new_price}</p>
								<button className={cx("cartitems-quantity")}>{cartItems[item.id]}</button>
								<p>${item.new_price * cartItems[item.id]}</p>
								<img
									className={cx("remove-btn")}
									src={remove_icon}
									onClick={() => {
										removeFromCart(item.id);
									}}
								></img>
							</div>
							<hr></hr>
						</div>
					);
				}
				return null;
			})}
			<div className={cx("cartitems-down")}>
				<div className={cx("cartitems-total")}>
					<h1>Cart Totals</h1>
					<div>
						<div className={cx("cartitems-total-item")}>
							<p>Sub totals</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr></hr>
						<div className={cx("cartitems-total-item")}>
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr></hr>
						<div className={cx("cartitems-total-item")}>
							<h3>Total</h3>
							<h3>${getTotalCartAmount()}</h3>
						</div>
						<hr></hr>
					</div>
					<button>PROCEED TO CHECKOUT</button>
				</div>
				<div className={cx("cartitems-promocode")}>
					<p>If you have promocode, enter it here</p>
					<div className={cx("cartitems-promobox")}>
						<input placeholder="promo code"></input>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItems;
