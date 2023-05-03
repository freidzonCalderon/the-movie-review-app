import React from "react";

const TrendingCard = ({ posterPath, title, releaseDate }) => {
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
		</div>
	);
};

export default TrendingCard;
