import styles from "./Item.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Item(props) {
	return (
		<Link style={{ textDecoration: "none", color: "#333" }} to={`/product/${props.id}`}>
			<div
				className={cx("item")}
				title={props.name}
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<img src={props.image}></img>
				<p>{props.name}</p>
				<div className={cx("item-prices")}>
					<div className={cx("item-price-new")}>${props.new_price}</div>
					<div className={cx("item-price-old")}>${props.old_price}</div>
				</div>
			</div>
		</Link>
	);
}

export default Item;
