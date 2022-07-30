import React from "react";
import "./Hero.css";
import ArrowRight from "../../assets/arrow-right.svg";
function Hero() {
	return (
		<div className="container">
			<section className="hero ">
				<p className="hero-text">
					First Ever Tech Personality Award For Africans in Europe
				</p>
				<form className="form">
					<input type="text" placeholder="Nomiees's Name,Nominees's Category" />
					<button className="hero-search">Search</button>
				</form>
				<div className="view-category">
					View all categories <img src={ArrowRight} alt="" />
				</div>
			</section>
		</div>
	);
}

export default Hero;
