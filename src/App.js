import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUpPage from "./components/pages/SignUpPage";
import Trending from "./components/pages/Trending";
import Favorites from "./components/pages/Favorites";
import ProtectedRoute from "./components/templates/ProtectedRoute";
import LoginPage from "./components/pages/LoginPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>

					<Route path="/trending" element={<Trending />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
