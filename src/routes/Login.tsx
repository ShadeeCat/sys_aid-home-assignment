import * as React from "react";
import { Link, useNavigate} from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/main")
	}
	return <div>
		<h2>Login Page</h2>
		<form action="">
			<input type="text" placeholder="Username" />
			<input type="email" placeholder="Email" />
			<button onClick={ handleLogin }>Login</button>
		</form>
	</div>
}
