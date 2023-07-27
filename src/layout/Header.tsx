import { SettingsUI } from "../components/buttons/SettingsUI";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../app/routers/routes";
import { useAppSelector } from "../app/hooks/redux";

export const Header = () => {
	const isAuth = useAppSelector((state) => state.authSlice.isAuth);
	console.log(isAuth);

	return (
		<Sheet
			color="primary"
			variant="solid"
			sx={{
				position: "fixed",
				boxSizing: "border-box",
				height: "60px",
				width: "100vw",
			}}
		>
			<Grid
				container
				sx={{
					height: "100%",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 24px",
				}}
			>
				<Grid xs="auto">Header</Grid>
				<Grid xs="auto">
					<Stack direction="row" spacing={2}>
						<SettingsUI />
						{isAuth ? (
							<Button variant="soft">Log out</Button>
						) : (
							<Button variant="soft">Log in</Button>
						)}
					</Stack>
				</Grid>
			</Grid>
		</Sheet>
	);
};
