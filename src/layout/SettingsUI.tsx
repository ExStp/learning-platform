import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { useAppDispatch, useAppSelector } from "../app/hooks/redux";
import { toggleSettingsUI } from "../app/slices/modals";
import { FadeModalDialog } from "../components/modalDialog/FadeModalDialog";
import IconButton from "@mui/joy/IconButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export const SettingsUI = () => {
	const IsSettingsUIOpen = useAppSelector((state) => state.modalsSlice.settingsUI);
	const dispatch = useAppDispatch();

	const handleCloseModal = () => {
		dispatch(toggleSettingsUI(false));
	};

	const handleOpenModal = () => {
		dispatch(toggleSettingsUI(true));
	};

	return (
		<>
			<IconButton variant="outlined" sx={{ width: "min-content" }} onClick={handleOpenModal}>
				<SettingsRoundedIcon />
			</IconButton>
			<FadeModalDialog isOpen={IsSettingsUIOpen} onClose={handleCloseModal}>
				<Box>
					<Typography id="nested-modal-title" component="h2">
						Settings
					</Typography>
				</Box>
			</FadeModalDialog>
		</>
	);
};
