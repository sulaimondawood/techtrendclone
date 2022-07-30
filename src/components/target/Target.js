import "./Target.css";
import Trophy from "../../assets/trophy.svg";
import Dices from "../../assets/dices.svg";
import TargetSvg from "../../assets/target.svg";
import Speaker from "../../assets/speaker.svg";
import Frame from "../../assets/Frame 48.svg";
import Frame2 from "../../assets/Frame 46.svg";
import Frame3 from "../../assets/Frame 47.svg";
import Frame4 from "../../assets/Frame 45.svg";

const Target = () => {
	return (
		<section className="target">
			<img className="frame" src={Frame} alt="" />
			<img className="frame2" src={Frame2} alt="" />
			<div className="container">
				<p className="target-title">Our Target</p>
				<div className="target-row">
					<div>
						<img src={Speaker} alt="" />
						<p>Awareness</p>
					</div>
					<div>
						<img src={TargetSvg} alt="" />
						<p>Competition</p>
					</div>
					<div>
						<img src={Dices} alt="" />
						<p>Entertainment</p>
					</div>
					<div>
						<img src={Trophy} alt="" />
						<p>Recognition</p>
					</div>
				</div>
			</div>
			<img className="frame3" src={Frame3} alt="" />
			<img className="frame4" src={Frame4} alt="" />
		</section>
	);
};

export default Target;
