import React from "react";

const LevelComponent = ({ logo, h1, info }) => {
	return (
		<div className="levels-col">
			<img src={logo} alt="" />
			<h1>{h1}</h1>
			<p>{info}</p>
		</div>
	);
};

export default LevelComponent;
