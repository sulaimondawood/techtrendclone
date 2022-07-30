import React from "react";
import { Link } from "react-router-dom";
import "../sign/Sign.css";
import Google from "../../assets/google.svg";
import "./Login.css";
// import Group4 from "../../assets/Group 4.svg";
import Group5 from "../../assets/Group 5.svg";
import Group6 from "../../assets/Group 6.svg";
import Group7 from "../../assets/Group 7.svg";
import Group8 from "../../assets/Group 8.svg";
import Group9 from "../../assets/Group 9.svg";

const LoginCom = () => {
	return (
		<section className="log-container">
			<div className="sign-wrapper">
				<h1>Let’s pick up where we left off yeah?</h1>
				<p>Create an Account</p>
				<div>
					<p>
						<span> Have an account? </span>{" "}
						<Link className="login-log" to="/signup">
							Sign Up
						</Link>
					</p>
				</div>
				<div className="sign-google">
					<img src={Google} alt="" />
					<p>Continue with google</p>
				</div>
				<p className="or">OR</p>

				{/* form******* */}

				<form action="" className="signup-form">
					<div>
						<label htmlFor="email">Email Address</label>
						<input type="email" name="email" required id="email" />
					</div>

					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" required id="password" />
					</div>
					<button className="log-in" type="submit">
						<Link className="in" to="/">
							Log In
						</Link>
					</button>
					<button className="fpass">Forgot Password</button>
				</form>
			</div>
			{/* <img className="group4" src={Group4} alt="" /> */}
			<img className="group5" src={Group5} alt="" />
			<img className="group6" src={Group6} alt="" />
			<img className="group7" src={Group7} alt="" />
			<img className="group8" src={Group8} alt="" />
			<img className="group9" src={Group9} alt="" />
		</section>
	);
};

export default LoginCom;
