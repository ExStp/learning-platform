import { FC } from "react";
import Typography from "@mui/joy/Typography";
import Container from "@mui/joy/Container";

export const Chat: FC = () => {
	return (
		<Container
			sx={{
				pt: "60px",
				height: "100dvh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography level="h3">Chat</Typography>
		</Container>
	);
};
