import styles from "./NewsLetter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NewsLetter() {
	return (
		<div className={cx("news-letter")}>
			<h1>Get Exclusive Offers On Your Email</h1>
			<p>Subscribe to our newletter and stay updated</p>
			<div>
				<input type="email" placeholder="Your email id"></input>
				<button>Subscribe</button>
			</div>
		</div>
	);
}

export default NewsLetter;
