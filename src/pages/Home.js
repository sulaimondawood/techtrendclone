import Awards from "../components/award/Awards";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Levels from "../components/levels/Levels";
import Target from "../components/target/Target";

const Home = () => {
	return (
		<>
			{/* <Header /> */}
			<Hero />
			<Target />
			<Awards />
			<Levels />
			<Footer />
		</>
	);
};

export default Home;
