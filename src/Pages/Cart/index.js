import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import CartItems from "../../Components/CartItems";

const cx = classNames.bind(styles);
function Cart() {
	return (
		<div className={cx("cart")}>
			<CartItems></CartItems>
		</div>
	);
}

export default Cart;
