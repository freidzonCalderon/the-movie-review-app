import React from "react";

const RemoveFromFavoriteButton = ({ handleToggleFavorite }) => {
	return (
		<button
			onClick={handleToggleFavorite}
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
		>
			Remove from Favorites
		</button>
	);
};

export default RemoveFromFavoriteButton;
