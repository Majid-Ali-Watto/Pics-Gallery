/** @format */

import "../App.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { Close } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { Alert, Avatar, Button, Rating } from "@mui/material";
function PostCard(props) {
	// eslint-disable-next-line react/prop-types
	const links = [...props.link];
	const [disp, setDisp] = useState("none");
	const [value, setValue] = useState(2);
	const [comment, setComment] = useState("");
	const [open, setOpen] = useState(false);

	const CommentCard = () => {
		setDisp("flex");
	};
	return (
		<div className="container">
			<div style={{ display: "flex", justifyContent: "center", position: "relative", top: 100 }} className="container">
				<div style={{ display: disp }} className="comment-card">
					<AiOutlineClose
						onClick={() => setDisp("none")}
						style={{
							width: "100px",
							height: "50px",
							position: "absolute",
							top: "0",
							right: "0",
						}}
					/>
					<TextField
						id="standard-multiline-static"
						label="Comment"
						multiline
						rows={15}
						fullWidth
						required
						defaultValue={comment}
						variant="filled"
						onChange={(event) => {
							setComment(event.target.value);
							setOpen(false);
						}}
					/>
					<br />
					<Button
						onClick={() => {
							console.log(comment);
							if (comment.length <= 0) setOpen(true);
						}}
						variant="contained"
						endIcon={<AiOutlineSend />}
					>
						Send
					</Button>
					{open && (
						<>
							<Alert severity="warning">Please write some comment or close modal!</Alert>
							<Close onClick={() => setOpen(false)} />
						</>
					)}
				</div>
			</div>

			<div className="card">
				{links ? (
					links.map((l, index) => (
						<div
							key={index}
							style={{
								display: "flex",
								"flex-direction": "column",
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
