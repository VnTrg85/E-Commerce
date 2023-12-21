import styles from "./Offers.module.scss";
import classNames from "classnames/bind";
import exclusive_image from "../Assets/exclusive_image.png";

const cx = classNames.bind(styles);

function Offers() {
	return (
		<div className={cx("offers")}>
			<div className={cx("offers-left")}>
				<h1>Exclusive</h1>
				<h1>Offers for you</h1>
				<p>ONLY ON BEST SELLERS PRODUCTS</p>
				<button>Check Now</button>
			</div>
			<div className={cx("offers-right")}>
				<img src={exclusive_image}></img>
			</div>
		</div>
	);
}

export default Offers;
