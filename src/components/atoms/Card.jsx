import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import AddToFavoriteButton from "./AddToFavoriteButton";
import RemoveFromFavoriteButton from "./RemoveFromFavoriteButton";

const Card = () => {
	const [isFavorite, setIsFavorite] = useState(true);

	const handleToggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};
	return (
		<div>
			<div className="card w-72 h-100">
				<img
					src="https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
					className="card-img-top"
					alt="movie-poster"
				/>
				<div className="card-body">
					<h5 className="card-title">Title</h5>
					<p className="card-text">Date</p>
				</div>

				{isFavorite ? (
					<AddToFavoriteButton handleToggleFavorite={handleToggleFavorite} />
				) : (
					<RemoveFromFavoriteButton
						handleToggleFavorite={handleToggleFavorite}
					/>
				)}

				<Rating size={24} activeColor="#ffd700" />
			</div>
		</div>
	);
};

export default Card;
