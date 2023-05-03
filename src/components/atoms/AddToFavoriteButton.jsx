import React from "react";

const AddToFavoriteButton = ({ handleToggleFavorite }) => {
	return (
		<button
			onClick={handleToggleFavorite}
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
		>
			Add to Favorites
		</button>
	);
};

export default AddToFavoriteButton;
