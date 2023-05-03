import React from "react";

const AddToFavoriteButton = ({ handleToggleFavorite }) => {
	return (
		<button onClick={handleToggleFavorite} className="btn btn-primary">
			Add to Favorites
		</button>
	);
};

export default AddToFavoriteButton;
