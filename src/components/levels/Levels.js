import LevelComponent from "./LevelComponent";
import Star from "../../assets/star.svg";
import Frame43 from "../../assets/Frame 43.svg";
import Ribbon from "../../assets/ribbon.svg";
import "./Level.css";
const Levels = () => {
	return (
		<section className="levels">
			<div className="container">
				<div className="levels-row">
					<LevelComponent
						info="
Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.
"
						h1="Promising Talent
        "
						logo={Ribbon}
					/>
					<LevelComponent
						info="
						Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
						h1="Intermediate Talent
        "
						logo={Star}
					/>
					<LevelComponent
						info="
						Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
						h1="Exceptional Talent
        "
						logo={Frame43}
					/>
				</div>
			</div>
		</section>
	);
};

export default Levels;
