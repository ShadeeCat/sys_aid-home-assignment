import * as React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom"

import { Header } from "./components/Header";

export const MainApp = () => {
	const navigate = useNavigate()
	const handleLogout = () => {
		navigate("/")
	}
	return <div>
		<Header />
			<button onClick={handleLogout}>Logout</button>
		<Outlet />
	</div>
}
