import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuNavigation = () => {
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
					<Link to="/profile" className="nav-link">
						Profile
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MenuNavigation;
