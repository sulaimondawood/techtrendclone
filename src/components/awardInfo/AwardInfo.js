import React from "react";
import "./AwardInfo.css";
import { Link } from "react-router-dom";
const AwardInfo = ({ button, title, info }) => {
	return (
		<div className="award-infos">
			<div className="award-info-title">
				<h1>{title}</h1>
				<div className="award-underline"></div>
			</div>
			<p className="award-info">{info}</p>
			{/* <p className="award-info">{info}</p> */}
			<Link className="sign-up" to="/learnmore">
				{button}
			</Link>
		</div>
	);
};

export default AwardInfo;
