import styles from "./ProductsRelated.module.scss";
import classNames from "classnames/bind";
import products_related from "../Assets/data";
import Item from "../Item";

const cx = classNames.bind(styles);

function ProductsRelated() {
	return (
		<div className={cx("products-related")}>
			<h1>Related Products</h1>
			<hr></hr>
			<div className={cx("products-realated-items")}>
				{products_related.map((item, index) => (
					<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
				))}
			</div>
		</div>
	);
}

export default ProductsRelated;
