import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Image, DropdownButton, Dropdown } from "react-bootstrap";

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
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index} href="#/action-1">
								{item}
								<span onClick={() => actions.DeleteFav(item.name)}>
									<i className="fas fa-trash-alt float right" />
								</span>
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
