import { SettingsUI } from "../components/buttons/SettingsUI";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import { UserAuth } from "../components/buttons/UserAuth";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button, Container } from "@mui/joy";
import { ROUTES } from "../app/routers/routes";

export const AppLayout = () => {
	const location = useLocation();
	const isHomePath = location.pathname === ROUTES.HOME;
	return (
		<>
			<Sheet
				color="primary"
				variant="solid"
				sx={{
					zIndex: "1000",
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
					<Grid xs="auto">
						{!isHomePath ? (
							<Link to={ROUTES.HOME}>
								<Button size="lg">Get home</Button>
							</Link>
						) : (
							"EngX"
						)}
					</Grid>
					<Grid xs="auto">
						<Stack direction="row" spacing={2}>
							<SettingsUI />
							<UserAuth />
						</Stack>
					</Grid>
				</Grid>
			</Sheet>
			<Container
				sx={{
					pt: "60px",
					minHeight: "100dvh",
				}}
			>
				<Outlet />
			</Container>
		</>
	);
};
