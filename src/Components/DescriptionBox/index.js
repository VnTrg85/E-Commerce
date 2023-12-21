import styles from "./DescriptionBox.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function DescriptionBox() {
	return (
		<div className={cx("description-box")}>
			<div className={cx("description-box-navagator")}>
				<div className={cx("description-nav-box")}>Description</div>
				<div className={cx("description-nav-box", "fade")}>Reviews (122)</div>
			</div>
			<div className={cx("description-box-description")}>
				<p>
					Ecommerce is one way people buy and sell things in retail. Some companies sell products online only, while other sellers use
					ecommerce as a part of a broader strategy that includes physical stores and other distribution channels. Either way, ecommerce
					allows startups, small businesses, and large companies to sell products at scale and reach customers across the worl
				</p>
				<p>
					An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is
					the virtual space where you showcase products, and online customers make selections.
				</p>
			</div>
		</div>
	);
}

export default DescriptionBox;
