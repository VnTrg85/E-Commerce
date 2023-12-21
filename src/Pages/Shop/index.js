import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import NewCollections from "../../Components/NewCollections";
import NewsLetter from "../../Components/NewsLetter";
import Offers from "../../Components/Offers";
import Popular from "../../Components/Popular";

function Shop() {
	return (
		<div>
			<Hero></Hero>
			<Popular></Popular>
			<Offers></Offers>
			<NewCollections></NewCollections>
			<NewsLetter></NewsLetter>
		</div>
	);
}

export default Shop;
