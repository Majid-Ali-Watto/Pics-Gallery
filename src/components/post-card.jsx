/** @format */

import "../App.css";
import { useState } from "react";

import { Avatar, Rating } from "@mui/material";
import CommentBox from "./Comment-Box";
function PostCard(props) {
	console.log("🚀 ~ file: post-card.jsx:9 ~ PostCard ~ props:", props);
	// eslint-disable-next-line react/prop-types
	const links = [...props.link];
	const [disp, setDisp] = useState("none");
	const [value, setValue] = useState(2);

	/**
	 * The CommentCard function sets the display property to "flex", logs the result of 2 + 3 to the
	 * console, and sets the overflow property of the document body to "hidden".
	 */
	const CommentCard = () => {
		setDisp("flex");
		console.log(2 + 3);
		document.body.style.overflow = "hidden";
	};
	return (
		<div className="posts-container">
			<div style={{ display: "flex", justifyContent: "center", position: "relative", top: 100 }}>
				{disp && <CommentBox disp={disp} setDisp={setDisp} />}
			</div>

			<div className="card">
				{links ? (
					links.map((l, index) => (
						<div
							key={index}
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								border: "1px dotted darkturquoise",
								marginBottom: "10px",
							}}
						>
							<div style={{ marginTop: "10px", marginLeft: "22px", display: "flex", flexDirection: "row", gap: "10px" }}>
								<Avatar alt="Majid Ali" src="public\majid.jpg" />
								<p style={{ fontWeight: "bold" }}>Majid Ali</p>
							</div>
							<img src={l.url} className="logo" />
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									marginBottom: "10px",
								}}
							>
								<p
									id={"comment" + index}
									style={{ padding: "1em", margin: "1px", fontSize: "24px", fontFamily: "Merriweather" }}
									onClick={() => {
										document.getElementById("comment" + index).style.color = "blue";
									}}
								>
									Like
								</p>
								<Rating
									style={{ padding: "1em", margin: "1px", fontSize: "24px", fontFamily: "Merriweather" }}
									id={index}
									name="simple-controlled"
									value={value}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
								/>
								<p
									id={index}
									style={{ padding: "1em", margin: "1px", fontSize: "24px", fontFamily: "Merriweather" }}
									onClick={() => {
										CommentCard();
										// document.getElementById("" + index).style.color = "blue";
									}}
								>
									Comment
								</p>
							</div>
						</div>
					))
				) : (
					<h2>No data</h2>
				)}
			</div>
		</div>
	);
}

export default PostCard;
