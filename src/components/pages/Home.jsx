/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MenuNavigation from "../atoms/MenuNavigation";
import Card from "../atoms/Card";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

const Home = () => {
	const apiKey = process.env.REACT_APP_TMDB_API_KEY;
	const { user } = UserAuth();

	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
			);
			const mappedMovies = response.data.results.map((movie) => ({
				movieTitle: movie.title,
				movieId: movie.id,
				movieDate: movie.release_date,
				moviePoster: movie.poster_path,
			}));
			setMovies(mappedMovies);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div>
			<MenuNavigation />
			<div className="container">
				<h1 className="text-center mb-5 mt-5">Movies</h1>
				<ul className="list-none flex flex-wrap justify-between gap-4">
					{movies.length > 0 ? (
						movies.map((movie) => {
							return (
								<li key={movie.movieId}>
									<Card
										posterPath={movie.moviePoster}
										title={movie.movieTitle}
										releaseDate={movie.movieDate}
										userId={user.uid}
										movieId={movie.movieId}
									/>
								</li>
							);
						})
					) : (
						<h1 className="container text-center mb-5 mt-5 display-1">
							No movies to display
						</h1>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
