import React, { useEffect, useState } from "react";
import MenuNavigation from "../atoms/MenuNavigation";
import { getFavsFromDb } from "../../Firebase/dataBaseActions";
import { UserAuth } from "../../context/AuthContext";
import axios from "axios";
import Card from "../atoms/Card";

const Favorites = () => {
	const apiKey = process.env.REACT_APP_TMDB_API_KEY;
	const { user } = UserAuth();

	const [movies, setMovies] = useState([
		{
			movieTitle: "",
			movieId: "",
			movieDate: "",
			moviePoster: "",
			movieRating: "",
			isFavorite: "",
		},
	]);
	const [favMovies, setFavMovies] = useState([]);

	useEffect(() => {
		if (!user.uid) return;
		getFavsFromDb(user.uid).then((data) => {
			if (data) {
				setFavMovies(data);
			}
		});
	}, [user.uid]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movieInfoRequests = favMovies.map(async (movie) => {
					const response = await axios.get(
						`https://api.themoviedb.org/3/movie/${movie.movieId}?api_key=${apiKey}&language=en-US`
					);
					return {
						movieTitle: response.data.title,
						movieId: response.data.id,
						movieDate: response.data.release_date,
						moviePoster: response.data.poster_path,
						movieRating: movie.movieRating,
						isFavorite: movie.isFavorite,
					};
				});
				const movieInfo = await Promise.all(movieInfoRequests);
				setMovies(movieInfo);
			} catch (error) {
				console.error(error);
			}
		};
		if (favMovies.length > 0) {
			fetchMovies();
		}
	}, [favMovies]);

	return (
		<div>
			<MenuNavigation />
			<div className="container">
				<h1 className="text-center mb-5 mt-5">Favorites</h1>
				<ul className="list-none flex flex-wrap justify-between gap-4">
					{movies.map((movie) => (
						<li key={movie.movieId}>
							<Card
								posterPath={movie.moviePoster}
								title={movie.movieTitle}
								releaseDate={movie.movieDate}
								userId={user.uid}
								movieId={movie.movieId}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Favorites;
