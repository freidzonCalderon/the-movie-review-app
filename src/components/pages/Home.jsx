import React from "react";
import MenuNavigation from "../atoms/MenuNavigation";
import Card from "../atoms/Card";

const Home = () => {
	return (
		<div>
			<MenuNavigation />
			<div className="container">
				<h1 className="text-center mb-5 mt-5">Movies</h1>
				<ul className="list-none flex flex-wrap justify-between gap-4">
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
