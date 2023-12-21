import styles from "./ProductDisplay.module.scss";
import classNames from "classnames/bind";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const cx = classNames.bind(styles);

function ProductDisplay(props) {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);
	return (
		<div className={cx("product-display")}>
			<div className={cx("product-display-left")}>
				<div className={cx("product-img-list")}>
					<img src={product.image}></img>
					<img src={product.image}></img>
					<img src={product.image}></img>
					<img src={product.image}></img>
				</div>
				<div className={cx("product-display-image")}>
					<img src={product.image}></img>
				</div>
			</div>
			<div className={cx("product-display-right")}>
				<h1>{product.name}</h1>
				<div className={cx("product-display-right-stars")}>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_dull_icon}></img>
					<p>(122)</p>
				</div>
				<div className={cx("product-display-right-prices")}>
					<div className={cx("product-display-right-oldprice")}>${product.old_price}</div>
					<div className={cx("product-display-right-newprice")}>${product.new_price}</div>
				</div>
				<div className={cx("product-display-right-description")}>
					Completely comfy and always adorable? Must be our cropped baby tee! Fabric features organically grown cotton, which is naturally
					cultivated without the use of toxic chemicals to help prevent soil and water pollution.
				</div>
				<div className={cx("product-display-right-size")}>
					<h1>Select size</h1>
					<div className={cx("product-display-right-sizes")}>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button
					onClick={() => {
						window.scrollTo(0, 0);
						addToCart(product.id);
					}}
				>
					ADD TO CART
				</button>
				<p className={cx("product-display-right-category")}>
					<span>Category: </span>
					{product.category}
				</p>
				<p className={cx("product-display-right-tag")}>
					<span>Tag: </span>Modern, Latest
				</p>
			</div>
		</div>
	);
}

export default ProductDisplay;
