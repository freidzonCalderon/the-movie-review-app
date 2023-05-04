import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/AuthContext";
import { MoviesProvider } from "./context/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<MoviesProvider>
				<App />
			</MoviesProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
