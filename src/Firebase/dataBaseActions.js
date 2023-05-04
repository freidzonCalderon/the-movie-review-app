import { db } from "../Firebase/firebase";
import {
	collection,
	doc,
	setDoc,
	getDocs,
	query,
	where,
	FieldPath,
	getDoc,
	userDocRef,
	addDoc,
} from "firebase/firestore";

export const addMovieToDB = async (userId, movieId, rating, isFav) => {
	try {
		console.log(
			`Adding movie to Firestore: MovieID: ${movieId}, Rating: ${rating}, IsFav: ${isFav}, UserID: ${userId}`
		);

		const moviesCollectionRef = collection(db, "MoviesDB");
		const userDocRef = doc(moviesCollectionRef, userId.toString());
		const moviesSubCollectionRef = collection(userDocRef, "movies");
		const movieDocRef = doc(moviesSubCollectionRef, movieId.toString());

		await setDoc(movieDocRef, {
			userID: userId,
			movieId: movieId,
			movieRating: rating,
			isFavorite: isFav,
		});

		console.log("Movies added to Firestore successfully");
	} catch (error) {
		console.error("Error adding movies to Firestore: ", error);
	}
};
