import styles from "./NewCollections.module.scss";
import collections from "../Assets/new_collections";
import classNames from "classnames/bind";
import Item from "../Item";
const cx = classNames.bind(styles);

function NewCollections() {
	return (
		<div className={cx("new-collections")}>
			<h1>NEW COLLECTIONS</h1>
			<hr></hr>
			<div className={cx("collections")}>
				{collections.map((item, index) => (
					<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
				))}
			</div>
		</div>
	);
}

export default NewCollections;
