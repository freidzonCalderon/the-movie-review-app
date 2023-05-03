import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
					<NavDropdown title="freidzon@dommi.com" id="basic-nav-dropdown">
						<NavDropdown.Item href="/">Log Out</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MenuNavigation;
