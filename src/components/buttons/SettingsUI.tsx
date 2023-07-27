import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import { toggleSettingsUI } from "../../app/slices/modals";
import { FadeModalDialog } from "../modalDialog/FadeModalDialog";
import IconButton from "@mui/joy/IconButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Tooltip from "@mui/joy/Tooltip";
import { SettingsContent } from "../../layout/modals/SettingsCountent";

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
			<Tooltip title="Open UI settings" variant="soft">
				<IconButton variant="solid" sx={{ width: "min-content" }} onClick={handleOpenModal}>
					<SettingsRoundedIcon />
				</IconButton>
			</Tooltip>
			<FadeModalDialog isOpen={IsSettingsUIOpen} onClose={handleCloseModal}>
				<SettingsContent />
			</FadeModalDialog>
		</>
	);
};
