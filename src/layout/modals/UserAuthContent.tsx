import { FC } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Typography from "@mui/joy/Typography";

export const UserAuthContent: FC = () => {
	return (
		<Stack spacing={2}>
			<Typography
				id="alert-dialog-modal-title"
				component="h2"
				startDecorator={<WarningRoundedIcon />}
			>
				Authorization
			</Typography>
			<Divider />
			<Typography id="alert-dialog-modal-description" textColor="text.tertiary">
				You need to be authorized
			</Typography>
			<Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end", pt: 2 }}>
				<Button variant="plain" color="neutral">
					Log in
				</Button>
				<Button variant="solid" color="danger">
					Log out
				</Button>
			</Box>
		</Stack>
	);
};
