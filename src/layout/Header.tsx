import { SettingsUI } from "../components/buttons/SettingsUI";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import { UserAuth } from "../components/buttons/UserAuth";

export const Header = () => {
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
						<UserAuth />
					</Stack>
				</Grid>
			</Grid>
		</Sheet>
	);
};
