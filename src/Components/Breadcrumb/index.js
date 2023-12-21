import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const cx = classNames.bind(styles);

function Breadcrumb(props) {
	const { product } = props;
	return (
		<div className={cx("breadcrumb")}>
			HOME <img src={arrow_icon}></img> SHOP <img src={arrow_icon}></img> {product.category} <img src={arrow_icon}></img> {product.name}
		</div>
	);
}

export default Breadcrumb;
