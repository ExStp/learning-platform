import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { useAppDispatch, useAppSelector } from "../app/hooks/redux";
import { toggleSettingsUI } from "../app/slices/modals";
import { FadeModalDialog } from "../components/modalDialog/FadeModalDialog";
import IconButton from "@mui/joy/IconButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { ThemeSwitcher } from "../components/outlook/themeSwitcher";
import Tooltip from "@mui/joy/Tooltip";
import { LanguageSwitcher } from "../components/outlook/languageSwitcher";
import { PrimaryColorSwitcher } from "../components/outlook/primaryColorSwitcher";
import { colorScheme } from "../app/types/types";

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
				<IconButton
					variant="outlined"
					sx={{ width: "min-content" }}
					onClick={handleOpenModal}
				>
					<SettingsRoundedIcon />
				</IconButton>
			</Tooltip>
			<FadeModalDialog isOpen={IsSettingsUIOpen} onClose={handleCloseModal}>
				<SettingsContent />
			</FadeModalDialog>
		</>
	);
};

const SettingsContent = () => {
	return (
		<Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
			<Typography id="nested-modal-title" component="h2">
				Settings UI
			</Typography>

			<Stack direction={"row"} justifyContent="space-between">
				<Stack spacing={1}>
					<Typography
						id="nested-modal-description"
						textColor="text.tertiary"
						textAlign="center"
					>
						Mode
					</Typography>
					<ThemeSwitcher />
				</Stack>

				<Stack spacing={1}>
					<Typography
						id="nested-modal-description"
						textColor="text.tertiary"
						textAlign="center"
					>
						Language
					</Typography>
					<LanguageSwitcher />
				</Stack>
			</Stack>

			<Typography id="nested-modal-description" textColor="text.tertiary" pt="16px">
				Set accent color scheme
			</Typography>

			<Stack direction='column' justifyContent="space-between" spacing={2}>
				<Stack spacing={1}>
					<Typography id="nested-modal-description" textColor="text.tertiary">
						Dark theme
					</Typography>
					<PrimaryColorSwitcher themeMode={colorScheme.dark} />
				</Stack>

				<Stack spacing={1}>
					<Typography id="nested-modal-description" textColor="text.tertiary">
						Light theme
					</Typography>
					<PrimaryColorSwitcher themeMode={colorScheme.light} />
				</Stack>
			</Stack>
		</Stack>
	);
};
