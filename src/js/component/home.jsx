import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Footer } from "./footer.jsx";
import { Card } from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div class = "container">
				<Jumbotron/>
				<div class="d-flex justify-content-md-around flex-md-nowrap flex-wrap justify-content-center">
					<Card title={"titulo"} text = "Some quick example text to build on the card title and make up the bulk of the card's content."/>
					<Card title={"titulo"} text = "Some quick example text to build on the card title and make up the bulk of the card's content."/>
					<Card title={"titulo"} text = "Some quick example text to build on the card title and make up the bulk of the card's content."/>
					<Card title={"titulo"} text = "Some quick example text to build on the card title and make up the bulk of the card's content."/>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
