import React from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import Google from "../../assets/google.svg";
import Group4 from "../../assets/Group 4.svg";
import Group5 from "../../assets/Group 5.svg";
import Group6 from "../../assets/Group 6.svg";
import Group7 from "../../assets/Group 7.svg";
import Group8 from "../../assets/Group 8.svg";
import Group9 from "../../assets/Group 9.svg";
const Sign = () => {
	return (
		<section className="sign">
			<div className="sign-wrapper">
				<h1>Time to vote your favourite Techie, let's make this amazing!</h1>
				<p>Create an Account</p>
				<div>
					<p>
						<span> Have an account? </span>{" "}
						<Link className="login-log" to="/login">
							Log In
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
					<div className="names-container">
						<div>
							<label htmlFor="firstName">First Name</label>
							<input type="text" id="firstName" required />
						</div>
						<div>
							<label htmlFor="lastName">Last Name</label>
							<input type="text" id="lastName" required />
						</div>
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label htmlFor="number">Phone Number</label>
						<input type="number" name="number" required id="number" />
					</div>
					<div>
						<label htmlFor="password">Set Password</label>
						<input type="password" name="password" required id="password" />
					</div>
					<div>
						<label htmlFor="gender">Gender</label>
						<select name="gender" required id="gender">
							<option value=""></option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<p className="policy">
						By registering you agree to Techtrend Africa's
						<Link className="yellow" to="/policy">
							Terms of Use
						</Link>
						and{" "}
						<Link className="yellow" to="/policy">
							Privacy Policy
						</Link>
					</p>
					<button className="submit" type="submit">
						Create Account
					</button>
				</form>
			</div>
			<img className="group4" src={Group4} alt="" />
			<img className="group5" src={Group5} alt="" />
			<img className="group6" src={Group6} alt="" />
			<img className="group7" src={Group7} alt="" />
			<img className="group8" src={Group8} alt="" />
			<img className="group9" src={Group9} alt="" />
		</section>
	);
};

export default Sign;
