import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import ProductDisplay from "../../Components/ProductDisplay";
import DescriptionBox from "../../Components/DescriptionBox";
import ProductsRelated from "../../Components/ProductsRelated";
const cx = classNames.bind(styles);

function Product() {
	const { all_products } = useContext(ShopContext);
	const { productId } = useParams();
	const product = all_products.find(item => item.id === Number(productId));
	return product ? (
		<div className={cx("product")}>
			<Breadcrumb product={product}></Breadcrumb>
			<ProductDisplay product={product}></ProductDisplay>
			<DescriptionBox></DescriptionBox>
			<ProductsRelated></ProductsRelated>
		</div>
	) : null;
}

export default Product;
