// import classNames
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Navbar() {
	const [menu, setMenu] = useState("Shop");
	const { getTotalCartItems } = useContext(ShopContext);
	const menuRef = useRef();
	const dropdown_toggle = e => {
		menuRef.current.classList.toggle(cx("nav-menu-visible"));
	};
	const handleClickOnItem = type => {
		setMenu(type);
		menuRef.current.classList.toggle(cx("nav-menu-visible"));
	};
	return (
		<div className={cx("navbar")}>
			<div onClick={dropdown_toggle} className={cx("nav-dropdown")}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<Link style={{ textDecoration: "none", color: "#333" }} to="/">
				<div onClick={e => handleClickOnItem("Shop")} className={cx("nav-logo")}>
					<img src={logo}></img>
					<p>SHOPPER</p>
				</div>
			</Link>
			<ul ref={menuRef} className={cx("nav-menu")}>
				<li onClick={e => handleClickOnItem("Shop")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/">
						Shop
					</Link>{" "}
					{menu == "Shop" ? <hr></hr> : <></>}
				</li>
				<li onClick={e => handleClickOnItem("Men")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/men">
						Men
					</Link>{" "}
					{menu == "Men" ? <hr></hr> : <></>}
				</li>
				<li onClick={e => handleClickOnItem("Women")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/women">
						Women
					</Link>{" "}
					{menu == "Women" ? <hr></hr> : <></>}
				</li>
				<li onClick={e => handleClickOnItem("Kids")} className={cx("nav-menu-item")}>
					<Link style={{ textDecoration: "none" }} to="/kids">
						Kids
					</Link>{" "}
					{menu == "Kids" ? <hr></hr> : <></>}
				</li>
			</ul>
			<div className={cx("nav-login-cart")}>
				{localStorage.getItem("auth-token") ? (
					<button
						onClick={() => {
							localStorage.removeItem("auth-token");
							window.location.replace("/");
						}}
					>
						Log out
					</button>
				) : (
					<Link style={{ textDecoration: "none" }} to="/login">
						<button>Login</button>
					</Link>
				)}
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
