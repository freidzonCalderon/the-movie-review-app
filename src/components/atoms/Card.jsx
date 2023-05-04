import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import AddToFavoriteButton from "./AddToFavoriteButton";
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";

const Card = ({ posterPath, title, releaseDate, userId, movieId }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	// const handleAddingMovieToDB = (movie) => {
	// 	return addMovieToDB(user.uid, movie.movieId, 0, false);
	// };

	// const handleToggleFavorite = async () => {
	// 	try {
	// 		setIsFavorite(!isFavorite);
	// 		await handleAddingMovieToDB(userId, movieId, 3, isFavorite);
	// 	} catch (error) {
	// 		console.error("Error adding movie to Firestore: ", error);
	// 	}
	// };

	const handleToggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};

	return (
		<div className="card w-72 h-100 shadow-md transform hover:scale-105 cursor-pointer">
			<img
				src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
				className="card-img-top"
				alt="movie-poster"
			/>
			<div className="card-body">
				<h5 className="card-title font-semibold">{title}</h5>
				<p className="card-text">{releaseDate}</p>
			</div>

			{isFavorite ? (
				<RemoveFromFavoriteButton handleToggleFavorite={handleToggleFavorite} />
			) : (
				<AddToFavoriteButton handleToggleFavorite={handleToggleFavorite} />
			)}

			<Rating size={24} activeColor="#ffd700" />
		</div>
	);
};

export default Card;
