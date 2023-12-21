// import classNames
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const cx = classNames.bind(styles);

function Navbar() {
	const [menu, setMenu] = useState("Shop");
	const { getTotalCartItems } = useContext(ShopContext);
	return (
		<div className={cx("navbar")}>
			<Link style={{ textDecoration: "none", color: "#333" }} to="/">
				<div className={cx("nav-logo")}>
					<img src={logo}></img>
					<p>SHOPPER</p>
				</div>
			</Link>
			<ul className={cx("nav-menu")}>
				<li onClick={e => setMenu("Shop")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/">
						Shop
					</Link>{" "}
					{menu == "Shop" ? <hr></hr> : <></>}
				</li>
				<li onClick={e => setMenu("Men")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/men">
						Men
					</Link>{" "}
					{menu == "Men" ? <hr></hr> : <></>}
				</li>
				<li onClick={e => setMenu("Women")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/women">
						Women
					</Link>{" "}
					{menu == "Women" ? <hr></hr> : <></>}
				</li>
				<li onClick={e => setMenu("Kids")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/kids">
						Kids
					</Link>{" "}
					{menu == "Kids" ? <hr></hr> : <></>}
				</li>
			</ul>
			<div className={cx("nav-login-cart")}>
				<Link style={{ textDecoration: "none" }} to="/login">
					<button>Login</button>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/cart">
					<div>
						<img src={cart_icon}></img>
						<span className={cx("nav-cart-count")}>{getTotalCartItems()}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
