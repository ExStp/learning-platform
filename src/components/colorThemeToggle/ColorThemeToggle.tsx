import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import { useTranslation } from "react-i18next";

export function ColorThemeToggle() {
	const { mode, setMode } = useColorScheme();
	const { t } = useTranslation();

	function handleClick() {
		setMode(mode === "light" ? "dark" : "light");
	}

	return (
		<Button variant="outlined" onClick={handleClick}>
			{t("btn.change theme")}
		</Button>
	);
}
