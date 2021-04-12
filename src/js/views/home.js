import React from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Cards } from "./cards";
import { Planeta } from "./planets";

export const Home = () => {
	return (
		<>
			<Cards />
			<Planeta />
		</>
	);
};
