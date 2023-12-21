import styles from "./Hero.module.scss";
import classNames from "classnames/bind";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const cx = classNames.bind(styles);

function Hero() {
	return (
		<div className={cx("hero")}>
			<div className={cx("hero-left")}>
				<h2>NEW ARRIVALS ONLY</h2>
				<div>
					<div className={cx("hero-hand-icon")}>
						<p>new</p>
						<img src={hand_icon}></img>
					</div>
					<p>collections</p>
					<p>for everyone</p>
				</div>
				<div className={cx("hero-latest-btn")}>
					<div>Latest Collections</div>
					<img src={arrow_icon}></img>
				</div>
			</div>
			<div className={cx("hero-right")}>
				<img src={hero_image}></img>
			</div>
		</div>
	);
}

export default Hero;
