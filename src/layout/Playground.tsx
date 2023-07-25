import Box from "@mui/joy/Box";
import { LangSwitcher } from "../components/langSwitcher/LangSwitcher";
import { ColorThemeToggle } from "../components/colorThemeToggle/ColorThemeToggle";
import Input from "@mui/joy/Input";
import { useTranslation } from "react-i18next";
import { Counter } from "../components/counter/Counter";
import Stack from "@mui/joy/Stack";

export function Playground() {
	const { t } = useTranslation();

	return (
		<Box sx={{ height: "fit-content" }}>
			<Stack spacing={2}>
				<LangSwitcher />
				<ColorThemeToggle />
				<p className="read-the-docs">{t("title")}</p>
				<Input color="primary" placeholder={t("input.send message")} size="md" variant="plain" />
				<Counter />
			</Stack>
		</Box>
	);
}
