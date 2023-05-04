import React, { useState } from "react";
import MenuNavigation from "../atoms/MenuNavigation";
import { Card } from "react-bootstrap";

const Favorites = () => {
	const [movies, setMovies] = useState([]);
	return (
		<div>
			<MenuNavigation />
			<div className="container">
				<h1 className="text-center mb-5 mt-5">Favorites</h1>
				<ul className="list-none flex flex-wrap justify-between gap-4">
					{movies.map((movie) => {
						return (
							<li key={movie}>
								<Card
									posterPath={movie}
									title={movie}
									releaseDate={movie}
									movieId={movie}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Favorites;
