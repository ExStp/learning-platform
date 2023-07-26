import { FC } from "react";
import IconButton from "@mui/joy/IconButton";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useColorScheme } from "@mui/joy/styles";

export const ThemeSwitcher: FC = () => {
	const { mode, setMode } = useColorScheme();

	return (
		<ToggleButtonGroup
			value={mode}
			onChange={(_event, newValue) => {
				setMode(newValue);
			}}
		>
			<IconButton value="dark">
				<DarkModeOutlinedIcon />
			</IconButton>
			<IconButton value="light">
				<LightModeOutlinedIcon />
			</IconButton>
		</ToggleButtonGroup>
	);
};
