import styles from "./Popular.module.scss";
import classNames from "classnames/bind";
import data_products from "../Assets/data";
import Item from "../Item";
const cx = classNames.bind(styles);

function Popular() {
	return (
		<div className={cx("popular")}>
			<h1>POPULAR IN WOMEN</h1>
			<hr></hr>
			<div className={cx("popular-items")}>
				{data_products.map((item, index) => (
					<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
				))}
			</div>
		</div>
	);
}

export default Popular;
