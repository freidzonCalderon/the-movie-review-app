import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const MenuNavigation = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logOut().then(() => {
				navigate("/");
			});
		} catch (e) {
			console.error(e.message);
		}
	};
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="p-3">
			<Link to="/home" className="navbar-brand">
				The Movie Review
			</Link>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Link to="/home" className="nav-link">
						Home
					</Link>
					<Link to="/favorites" className="nav-link">
						Favorites
					</Link>
					<Link to="/trending" className="nav-link">
						Trending
					</Link>
				</Nav>

				<Nav>
					<NavDropdown title={user && user.email} id="basic-nav-dropdown">
						<NavDropdown.Item onClick={handleLogOut}>Log Out</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MenuNavigation;
