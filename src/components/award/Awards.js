import "./Awards.css";
import WhatMany from "../../assets/whatmany.svg";
// import { Link } from "react-router-dom";
import Frame402 from "../../assets/Frame402.svg";
import Frame40 from "../../assets/Frame 40.svg";
import Man from "../../assets/manaward.svg";
import ManSit from "../../assets/mansit.svg";
import FemaleFair from "../../assets/femalefair.svg";
import What from "../../assets/what.png";

import AwardInfo from "../awardInfo/AwardInfo";
const Awards = () => {
	return (
		<div className="main-section">
			<div className="award-grand-container">
				<div className="container">
					<section className="award">
						<div className="award-left">
							<img src={WhatMany} alt="" />
						</div>
						<AwardInfo
							info="	The connected is....it is long established fact that a reader will be
				distracted by the readable content of a page when looking at its layout. The
				point of using lorem ipsum is that it has more-or-less normal distribution
				of leters, as opposed to using Content here. content here making it look
				like a readable English"
							title="The Connected Awards"
							button="Learn more"
						/>
						<img className="frame40" src={Frame40} alt="" />
					</section>
				</div>
			</div>

			<div className="techies-grand-container">
				<div className="container">
					<section className="techies">
						<img className="frame402" src={Frame402} alt="" />

						<AwardInfo
							info="The connected is.....It is a long established fact that 
						a reader will be distracted by the readable content 
						of a page when looking at its layout. The point of 
						using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
							title="Celebrated Techies"
							button="Read more"
						/>
						<div className="techies-gallery">
							<img src={Man} alt="" />
							<img src={FemaleFair} alt="" />
							<img src={ManSit} alt="" />
							<img src={What} alt="" />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Awards;
