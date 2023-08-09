import { Box, Button } from "@mui/joy";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
	return (
		<Box>
			<h1>Home page</h1>
			<Link to={"/dictionary"} style={{ textDecoration: "none" }}>
				<Button>Dictionary</Button>
			</Link>
		</Box>
	);
};
