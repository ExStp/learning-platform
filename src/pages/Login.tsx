import { Container } from "@mui/material";
import { FC } from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";

export const Login: FC = () => {
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
			<Stack spacing={3}>
				<Typography level="h4">Auth with Google account</Typography>
				<Button size="lg" variant="solid">
					Login
				</Button>
			</Stack>
		</Container>
	);
};
