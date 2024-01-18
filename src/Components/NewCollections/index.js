import styles from "./NewCollections.module.scss";
import classNames from "classnames/bind";
import Item from "../Item";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function NewCollections() {
	const [newCollections, setNewCollections] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000/newcollection")
			.then(response => response.json())
			.then(data => setNewCollections(data));
	}, []);
	return (
		<div className={cx("new-collections")}>
			<h1>NEW COLLECTIONS</h1>
			<hr></hr>
			<div className={cx("collections")}>
				{newCollections.map((item, index) => (
					<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
				))}
			</div>
		</div>
	);
}

export default NewCollections;
