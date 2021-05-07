import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import "../../styles/demo.scss";
export const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<span>{JSON.stringify(store.favorites)}</span>
			<h1 className="titulo">characters</h1>
			<div className="card-group scrollmenu">
				{store.people.map((item, index) => {
					return (
						<div className="card hola" key={index}>
							<img src="http://www.dummyimage.com/400x200" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Gender: {item.gender}</p>
								<p className="card-text"> hair color: {item.hair_color}</p>
								<p className="card-text"> eye color: {item.eye_color}</p>
							</div>
							<button type="button" className="btn btn-outline-primary">
								learn more
							</button>
							{store.favorites.includes(item.name) ? null : (
								<i className="fas fa-heart corazon" onClick={() => actions.setFavorites(item.name)} />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
