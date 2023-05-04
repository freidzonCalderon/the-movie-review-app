import { db } from "../Firebase/firebase";
import {
	collection,
	doc,
	setDoc,
	getDocs,
	query,
	where,
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

export const getInfoFromDb = async (userId, movieId) => {
	try {
		const parentDocRef = doc(db, "MoviesDB", userId.toString());

		const subcollectionRef = collection(parentDocRef, "movies");
		const q = query(subcollectionRef, where("movieId", "==", movieId));
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map((doc) => {
			const data = doc.data();

			// console.log(`User ID is: ${data.userID}`);
			// console.log(`Movie ID is: ${data.movieId}`);
			// console.log(`Data rating is: ${data.movieRating}`);
			// console.log(`Data isFavorite is: ${data.isFavorite}`);
			return data;
		});
	} catch (error) {
		console.error("Error fetching data from database: ", error);
		return [];
	}
};

export const getFavsFromDb = async (userId) => {
	try {
		const parentDocRef = doc(db, "MoviesDB", userId.toString());
		const subcollectionRef = collection(parentDocRef, "movies");
		const q = query(subcollectionRef, where("isFavorite", "==", true));
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map((doc) => {
			const data = doc.data();

			// console.log(`User ID is: ${data.userID}`);
			// console.log(`Movie ID is: ${data.movieId}`);
			// console.log(`Data rating is: ${data.movieRating}`);
			// console.log(`Data isFavorite is: ${data.isFavorite}`);
			return data;
		});
	} catch (error) {
		console.error("Error fetching data from database: ", error);
		return [];
	}
};
