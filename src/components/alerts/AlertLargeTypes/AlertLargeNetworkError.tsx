import { FC } from "react";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import Warning from "@mui/icons-material/Warning";

interface IProps {
	sx?: {
		[key: string]: string;
	};
}

export const AlertLargeNetworkError: FC<IProps> = ({ sx }) => {
	const handleReloadWindow = () => {
		window.location.reload();
	};

	return (
		<Alert
			variant="soft"
			color="danger"
			invertedColors
			startDecorator={
				<CircularProgress size="lg">
					<Warning />
				</CircularProgress>
			}
			sx={{
				width: "90vw",
				gap: "1rem",
				maxWidth: "500px",
				...sx,
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Typography level="h4">Lost connection</Typography>
				<Typography level="body1">
					Please verify your network connection and try again.
				</Typography>
				<Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 1 }}>
					<Button variant="solid" size="sm" onClick={handleReloadWindow}>
						Reload
					</Button>
				</Box>
			</Box>
		</Alert>
	);
};
