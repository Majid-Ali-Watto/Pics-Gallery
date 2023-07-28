/** @format */

import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import "./App.css";
import CustomAppBar from "./components/CustomAppBar";
const PostCard = lazy(() => import("./components/post-card"));

function App() {
	const limit = 10;
	const [links, setLinks] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		getData().then(() => {
			console.log("useEffect() called");
		});
	}, []);
	useEffect(() => {
		console.log(offset, links);
	}, [offset]);
	const getData = async () => {
		await axios
			.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_start=${offset}`)
			.then((response) => {
				// linksRef.current = [...response.data];
				setLinks((links) => [...links, ...response.data]);
				setOffset((offset) => offset + limit);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<div className="container">
			{/* <div className="buttonDiv">
				<button
					style={{
						"background-color": "blue",
						padding: "10px",
						fontStyle: "inherit",
						"font-weight": "bold",
						color: "whitesmoke",
						border: "none",
						width: "150px",
						height: "50px",

						fontFamily: "Poppins",
					}}
					onClick={async () => {
						await getData().then(() => {
							console.log("data loaded");
						});
					}}
				>
					Load
				</button>
			</div> */}

			<div className="app-bar">
				<CustomAppBar />
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				<PostCard link={links} />
			</Suspense>
		</div>
	);
}

export default App;
