// import React from ("react");
import { Outlet } from 'react-router-dom';
import { Header } from './routes/components/Header';

import './App.css';

export const App = () => <div>
	<Header />
	<Outlet />
</div>
