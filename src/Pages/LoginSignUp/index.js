import styles from "./LoginSignup.module.scss";
import classNames from "classnames/bind";
import { useLayoutEffect, useState } from "react";
const cx = classNames.bind(styles);

function LoginSignUp() {
	const [state, setState] = useState("Login");

	const validateEmail = email => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			);
	};

	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: "",
	});
	const validateData = data => {
		if (state === "Sign up" && data.username == "") {
			alert("Username have to not empty!!!");
			return false;
		}
		if (!validateEmail(data.email)) {
			alert("You have entered an invalid email address!");
			return false;
		}
		if (data.password === "") {
			alert("Password have to not empty!!!");
			return false;
		}
		return true;
	};
	const changeHandler = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const login = async () => {
		console.log("Login", formData);
		if (!validateData(formData)) return;
		let responseData;
		await fetch("http://localhost:4000/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(response => response.json())
			.then(data => (responseData = data));
		if (responseData.success === 1) {
			localStorage.setItem("auth-token", responseData.token);
			window.location.replace("/");
		} else {
			alert(responseData.error);
		}
	};
	const signup = async () => {
		console.log("Singup", formData);
		if (!validateData(formData)) {
			return;
		}
		let responseData;
		await fetch("http://localhost:4000/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(response => response.json())
			.then(data => (responseData = data));
		if (responseData.success === 1) {
			localStorage.setItem("auth-token", responseData.token);
			window.location.replace("/");
		} else {
			alert(responseData.error);
		}
	};
	return (
		<div className={cx("loginsignup")}>
			<div className={cx("loginsignup-container")}>
				<h1>{state}</h1>
				<div className={cx("loginsignup-fields")}>
					{state === "Sign up" ? (
						<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your name"></input>
					) : (
						<></>
					)}
					<input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address"></input>
					<input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"></input>
				</div>
				<button
					onClick={() => {
						state === "Login" ? login() : signup();
					}}
				>
					Continue
				</button>
				{state === "Sign up" ? (
					<p className={cx("loginsignup-login")}>
						Already have an account?
						<span
							onClick={() => {
								setState("Login");
							}}
						>
							Login here
						</span>
					</p>
				) : (
					<></>
				)}
				{state === "Login" ? (
					<p className={cx("loginsignup-login")}>
						Create an account?
						<span
							onClick={() => {
								setState("Sign up");
							}}
						>
							Click here
						</span>
					</p>
				) : (
					<></>
				)}
				{state === "Sign up" ? (
					<div className={cx("loginsignup-agree")}>
						<input type="checkbox" name="" id=""></input>
						<p>By continuing, I agree to the terms of use & privacy policy</p>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default LoginSignUp;
