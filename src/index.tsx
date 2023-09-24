import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainApp } from './routes/MainApp';
import { Login } from './routes/Login';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "main",
				element: <MainApp />
			},
			{
				path: "/",
				element: <Login />
			}
		]
	},
])

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<RouterProvider router={ router } />
);
