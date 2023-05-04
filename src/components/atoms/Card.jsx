import React, { useEffect, useState } from "react";
import Rating from "react-rating-stars-component";
import AddToFavoriteButton from "./AddToFavoriteButton";
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";
import { addMovieToDB, getInfoFromDb } from "../../Firebase/dataBaseActions";

const Card = ({
	posterPath,
	title,
	releaseDate,
	userId,
	movieId,
	reFetchMovies,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [rating, setRating] = useState(0);
	const [isRemoving, setIsRemoving] = useState(false);

	const handleToggleFavorite = async () => {
		try {
			const newIsFavorite = !isFavorite;
			setIsFavorite((prevState) => !prevState);
			setIsRemoving(true); // set isRemoving state to true
			await addMovieToDB(userId, movieId, rating, newIsFavorite);
			if (reFetchMovies) reFetchMovies();
			console.log("Movie added/updated to Firestore successfully");
		} catch (error) {
			console.error("Error adding/updating movie to Firestore: ", error);
		} finally {
			setIsRemoving(false); // set isRemoving state to false
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
			{isRemoving && (
				<div
					className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
					style={{ background: "rgba(0, 0, 0, 0.5)" }}
				>
					<div className="spinner-border text-light" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
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
