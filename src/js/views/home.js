import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">

		<Link to="/contacts" className="btn btn-success">
			Go to contact list
		</Link>
		
	</div>
);
