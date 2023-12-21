import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar></Navbar>
				<Routes>
					<Route path="/" element={<Shop></Shop>}></Route>
					<Route path="/men" element={<ShopCategory category="men" banner={men_banner}></ShopCategory>}></Route>
					<Route path="/women" element={<ShopCategory category="women" banner={women_banner}></ShopCategory>}></Route>
					<Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner}></ShopCategory>}></Route>
					<Route path="/product" element={<Product></Product>}>
						<Route path=":productId" element={<Product></Product>}></Route>
					</Route>
					<Route path="/cart" element={<Cart></Cart>}></Route>
					<Route path="/login" element={<LoginSignUp></LoginSignUp>}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
