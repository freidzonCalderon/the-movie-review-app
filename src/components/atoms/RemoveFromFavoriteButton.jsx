import React from "react";

const RemoveFromFavoriteButton = ({ handleToggleFavorite }) => {
	return (
		<button onClick={handleToggleFavorite} className="btn btn-danger">
			Remove from Favorites
		</button>
	);
};

export default RemoveFromFavoriteButton;
