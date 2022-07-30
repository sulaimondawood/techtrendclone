import React from "react";
import LittleMany from "../../assets/littlemany.svg";
import WhatMany from "../../assets/whatmany.svg";
import "./LearnMore.css";
const LearnMore = () => {
	return (
		<section className="learnmore-sec">
			<div className="container">
				<h1 className="title">The Connected Awards</h1>
				<p>Learn about us</p>
				<img src={LittleMany} alt="" />
				<div className="learn-row">
					<div className="left">
						<h1>Connecting Techies Globally</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions
							of Lorem Ipsum.
						</p>
					</div>
					<div className="right">
						<img src={WhatMany} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default LearnMore;
