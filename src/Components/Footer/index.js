import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const cx = classNames.bind(styles);
function Footer() {
	return (
		<div className={cx("footer")}>
			<div className={cx("footer-logo")}>
				<img src={footer_logo}></img>
				<p>SHOPPER</p>
			</div>
			<ul className={cx("footer-links")}>
				<li>Company</li>
				<li>Products</li>
				<li>Offices</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div className={cx("footer-social-icons")}>
				<div className={cx("footer-icons-container")}>
					<img src={instagram_icon}></img>
				</div>
				<div className={cx("footer-icons-container")}>
					<img src={pintester_icon}></img>
				</div>
				<div className={cx("footer-icons-container")}>
					<img src={whatsapp_icon}></img>
				</div>
			</div>
			<div className={cx("footer-copyright")}>
				<hr></hr>
				<p>Copyright @ 2023 - All Right Reserved</p>
			</div>
		</div>
	);
}

export default Footer;
