/** @format */

import { useState } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/CommentBox.css"; // Import the CSS file

// eslint-disable-next-line react/prop-types
function CommentBox({ disp, setDisp }) {
	const [comment, setComment] = useState("");
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setDisp("none");
		document.body.style.overflow = "scroll";
	};

	const handleSend = () => {
		if (comment.trim() === "") {
			setOpen(true);
		} else {
			console.log(comment);
			setOpen(false);
		}
	};

	return (
		// <div style={{ display: disp }} className="comment-box-modal">
		<div className="comment-box-content" style={{ display: disp }}>
			<AiOutlineClose onClick={handleClose} className="close-icon" />
			<br />
			<TextField
				label="Comment"
				multiline
				rows={10}
				fullWidth
				required
				value={comment}
				variant="outlined"
				onChange={(event) => {
					setComment(event.target.value);
					setOpen(false);
				}}
			/>
			<Button onClick={handleSend} variant="contained" endIcon={<AiOutlineSend />} className="send-button">
				Send
			</Button>
			{open && (
				<Alert severity="warning" className="alert-message">
					Please write some comment or close the modal!
					<CloseIcon className="close-alert" onClick={() => setOpen(false)} />
				</Alert>
			)}
		</div>
		// </div>
	);
}

export default CommentBox;
