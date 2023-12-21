import styles from "./ShopCategory.module.scss";
import classNames from "classnames/bind";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";
import Item from "../../Components/Item";
const cx = classNames.bind(styles);

function ShopCategory(props) {
	const { all_products } = useContext(ShopContext);
	return (
		<div className={cx("shopCategory")}>
			<img className={cx("shopCategory-banner")} src={props.banner}></img>
			<div className={cx("shopCategory-indexSort")}>
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<div className={cx("shopCategory-sort")}>
					Sort by <img src={dropdown_icon}></img>
				</div>
			</div>
			<div className={cx("shopCategory-products")}>
				{all_products.map((item, index) => {
					if (item.category === props.category) {
						return (
							<Item
								key={index}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							></Item>
						);
					} else {
						return null;
					}
				})}
			</div>
			<div className={cx("shopCategory-loadMore")}>Expore More</div>
		</div>
	);
}

export default ShopCategory;
