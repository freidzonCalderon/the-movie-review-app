import React, { useEffect, useState } from "react";
import Rating from "react-rating-stars-component";
import AddToFavoriteButton from "./AddToFavoriteButton";
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";
import { addMovieToDB, getInfoFromDb } from "../../Firebase/dataBaseActions";

const Card = ({ posterPath, title, releaseDate, userId, movieId }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [rating, setRating] = useState(0);

	const handleToggleFavorite = async () => {
		try {
			const newIsFavorite = !isFavorite;
			setIsFavorite((prevState) => !prevState);
			await addMovieToDB(userId, movieId, rating, newIsFavorite);
			console.log("Movie added/updated to Firestore successfully");
		} catch (error) {
			console.error("Error adding/updating movie to Firestore: ", error);
		}
	};

	const handleRatingChange = async (newRating) => {
		setRating(newRating);
		try {
			await addMovieToDB(userId, movieId, newRating, isFavorite);
			console.log("Movie added/updated to Firestore successfully");
		} catch (error) {
			console.error("Error adding/updating movie to Firestore: ", error);
		}
	};

	useEffect(() => {
		if (!userId || !movieId) return;
		getInfoFromDb(userId, movieId).then((data) => {
			if (data && data.length > 0) {
				setIsFavorite(data[0].isFavorite);
				setRating(data[0].movieRating);
			}
		});
	}, [userId, movieId]);

	return (
		<div className="card w-72 h-100 shadow-md transform hover:scale-105 cursor-pointer">
			<img
				src={`https://image.tmdb.org/t/p/w1280${posterPath}`}
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

			<Rating
				size={24}
				activeColor="#ffd700"
				onChange={handleRatingChange}
				value={rating}
			/>
		</div>
	);
};

export default Card;
