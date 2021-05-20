import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Image, DropdownButton, Dropdown } from "react-bootstrap";
import { Favorites } from "./favorites.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<Image
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
					// width="60"
					height="40"
					alt="Star Wars"
				/>
			</Link>
			<Favorites />
		</nav>
	);
};
