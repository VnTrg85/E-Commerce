import styles from "./LoginSignup.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function LoginSignUp() {
	return (
		<div className={cx("loginsignup")}>
			<div className={cx("loginsignup-container")}>
				<h1>Sign up</h1>
				<div className={cx("loginsignup-fields")}>
					<input type="text" placeholder="Your name"></input>
					<input type="email" placeholder="Email Address"></input>
					<input type="password" placeholder="Password"></input>
				</div>
				<button>Continue</button>
				<p className={cx("loginsignup-login")}>
					Already have an account?<span>Login here</span>
				</p>
				<div className={cx("loginsignup-agree")}>
					<input type="checkbox" name="" id=""></input>
					<p>By continuing, I agree to the terms of use & privacy policy</p>
				</div>
			</div>
		</div>
	);
}

export default LoginSignUp;
