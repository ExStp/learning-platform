import { useTranslation } from "react-i18next";
import { LangSwitcher } from "./components/langSwitcher/LangSwitcher";
import { theme } from "./assets/theme/theme";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { ColorThemeToggle } from "./components/colorThemeToggle/ColorThemeToggle";
import Input from '@mui/joy/Input';


function App() {
	const { t } = useTranslation();

	return (
		<CssVarsProvider theme={theme}>
			<GlobalStyles
				styles={{
					"[data-feather], .feather": {
						color: "var(--Icon-color)",
						margin: "var(--Icon-margin)",
						fontSize: "var(--Icon-fontSize, 20px)",
						width: "1em",
						height: "1em",
					},
				}}
			/>
			<CssBaseline />
			<Box sx={{ display: "flex", minHeight: "100dvh" }}>
				<Box>
					<LangSwitcher />
					<ColorThemeToggle />
					<p className="read-the-docs">{t("title")}</p>
					<Input
						color="primary"
						placeholder="Отравить сообщение"
						size="md"
						variant="plain"
					/>
				</Box>
			</Box>
		</CssVarsProvider>
	);
}

export default App;
