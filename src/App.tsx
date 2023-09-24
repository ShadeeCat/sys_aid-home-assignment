// import React from ("react");
import { Outlet } from 'react-router-dom';
import { Login } from "./routes/Login"
import { MainApp } from "./routes/MainApp"
import { Header } from './routes/components/Header';

import './App.css';

export const App = () => <div>
	<Header />
	<Outlet />
</div> 

{/* <div>
	<Login />
	<MainApp />
</div> */}
