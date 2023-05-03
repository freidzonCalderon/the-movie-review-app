import React, { useEffect, useState } from "react";
import MenuNavigation from "../atoms/MenuNavigation";
import TrendingCard from "./../atoms/TrendingCard";
import axios from "axios";

const Trending = () => {
	const apiKey = process.env.REACT_APP_TMDB_API_KEY;

	const [movies, setMovies] = useState([]);

	const fetchTrendingMovies = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
			);
			setMovies(response.data.results);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchTrendingMovies();
	}, []);

	return (
		<div>
			<MenuNavigation />
			<div className="container justify-center">
				<h1 className="text-center mb-5 mt-5">Trending Movies</h1>
				<ul className="list-none flex flex-wrap justify-between gap-4">
					{movies.map((movie) => (
						<li key={movie.id}>
							<TrendingCard
								posterPath={movie.poster_path}
								title={movie.title}
								releaseDate={movie.release_date}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Trending;
