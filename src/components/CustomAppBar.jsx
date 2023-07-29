/** @format */
import MenuIcon from "@mui/icons-material/Menu";
import { Message, Notifications } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { Badge, IconButton, Paper, InputBase, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const ColorButton = styled(IconButton)(() => ({
	color: "white",
	// "&:hover": {
	// 	backgroundColor: "skyblue",
	// },
}));
const BadgeButton = styled(Badge)(() => ({
	color: "white",
	// borderRadius: "50%",
	// "&:hover": {
	// 	backgroundColor: "skyblue",
	// },
}));
function CustomAppBar() {
	const navigate = useNavigate();
	return (
		<div
			style={{
				backgroundColor: "dodgerblue",
				width: "100%",
				padding: "15px",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<div className="" style={{ width: "20%" }}>
					<ColorButton size="large" color="inherit" edge="start" sx={{ mr: 2 }}>
						<MenuIcon />
					</ColorButton>
				</div>
				<div
					className="app-title"
					style={{
						color: "white",
						fontWeight: "bold",
						letterSpacing: "1px",
						wordSpacing: "2px",
						fontFamily: "Poppins",
						width: "80%",
					}}
				>
					Pictures Gallery
				</div>
			</div>
			<div className="app-search">
				<Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
					<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." inputProps={{ "aria-label": "search" }} />
					<IconButton type="button" sx={{ p: "5px" }} aria-label="search" onClick={() => alert("searching")}>
						<Search />
					</IconButton>
				</Paper>
			</div>

			<div
				className="app-services-options"
				style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: "40px" }}
			>
				{/* <ColorButton size="large" color="inherit" edge="start" sx={{ mr: 2 }}>
					<Message />
				</ColorButton> */}
				<BadgeButton badgeContent={4} color="warning" size="large" edge="start" sx={{ mr: 2 }} onClick={() => navigate("/chat")}>
					<Message fontSize="large" />
				</BadgeButton>
				<BadgeButton badgeContent={4} color="warning" size="large" edge="start" sx={{ mr: 2 }}>
					<Notifications fontSize="large" />
				</BadgeButton>
				<Avatar alt="Majid Ali" src="public\majid.jpg" />
				{/* <img src="public\vite.svg" style={{ width: "35px", height: "35px", backgroundColor: "red", borderRadius: "50%" }} /> */}
			</div>
		</div>
	);
}

export default CustomAppBar;
