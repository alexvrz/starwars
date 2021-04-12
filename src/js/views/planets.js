import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../../styles/demo.scss";
export const Planeta = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="titulo style">Planets</h1>
			<div className="card-group">
				{store.planets.map((item, index) => {
					return (
						<div className="card" key={index}>
							<img src="http://placehold.it/400x200.png" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">population: {item.population}</p>
								<p className="card-text">terrain: {item.terrain}</p>
							</div>
							<button type="button" className="btn btn-outline-primary">
								learn more
							</button>
							{store.favorites.includes(item.name) ? null : (
								<i className="fas fa-heart" onClick={() => actions.setFavorites(item.name)} />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
