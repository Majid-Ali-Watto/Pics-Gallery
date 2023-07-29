/** @format */
import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const ChatSection = lazy(() => import("./pages/Chat-Section"));
const Login = lazy(() => import("./pages/Login"));

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Suspense>
					<Login />
				</Suspense>
			),
		},
		{
			path: "/home",
			element: (
				<Suspense>
					<Home />
				</Suspense>
			),
		},
		{
			path: "/chat",
			element: (
				<Suspense>
					<ChatSection />
				</Suspense>
			),
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
