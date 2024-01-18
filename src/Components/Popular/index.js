import styles from "./Popular.module.scss";
import classNames from "classnames/bind";
import Item from "../Item";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Popular() {
	const [popular, setPopular] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000/popularinwomen")
			.then(response => response.json())
			.then(data => setPopular(data));
	}, []);
	return (
		<div className={cx("popular")}>
			<h1>POPULAR IN WOMEN</h1>
			<hr></hr>
			<div className={cx("popular-items")}>
				{popular.map((item, index) => (
					<Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
				))}
			</div>
		</div>
	);
}

export default Popular;
