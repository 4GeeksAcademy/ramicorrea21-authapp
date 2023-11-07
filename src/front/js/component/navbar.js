import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const {store, actions} = useContext(Context)

	const handleLogout = () =>{
		actions.logout()
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Authapp</span>
				</Link>
				<div className="ml-auto">
					{store.token == null? (<>
						<Link to="/singup">
						<button className="btn btn-primary">Register</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary mx-2">Login</button>
					</Link>
					</>) : <button className="btn btn-danger mx-2" onClick={handleLogout}>Logout</button> }

				</div>
			</div>
		</nav>
	);
};
