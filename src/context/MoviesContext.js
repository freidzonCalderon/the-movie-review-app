import React, { createContext, useState } from "react";

// Create a context to store an array of favorite movies
export const MoviesContext = createContext();

// Create a provider component to wrap the app and pass the context down to child components
export const MoviesProvider = ({ children }) => {
	// Define state to store the array of favorite movies
	const [movies, setMovies] = useState([]);

	// Define a function to add a movie to the array of favorite movies
	const addmovie = (movie) => {
		if (!movies.find((movie) => movie.id === movie.id)) {
			setMovies([...movies, movie]);
			alert("Movie added to favorites");
		} else {
			alert("Movie is already in the list");
		}
	};

	
	// Pass the context down to child components
	return (
		<MoviesContext.Provider value={{ movies, addmovie, }}>
			{children}
		</MoviesContext.Provider>
	);
};
