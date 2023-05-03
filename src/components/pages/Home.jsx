import React from "react";
import MenuNavigation from "../atoms/MenuNavigation";

const Home = () => {
	return (
		<div>
			<MenuNavigation />
			<div className="container">
				<h1 className="text-center mb-5 mt-5">Movies</h1>
			</div>
		</div>
	);
};

export default Home;
