import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { Playground } from "./layout/Playground";
import { useAppSelector } from "./app/hooks/redux";
import { extendTheme } from "@mui/joy/styles";

function App() {
	const theme = useAppSelector((state) => state.themeSlice);

	return (
		<CssVarsProvider theme={extendTheme(theme)}>
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
			<Box
				sx={{
					display: "flex",
					minHeight: "100dvh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Playground />
			</Box>
		</CssVarsProvider>
	);
}

export default App;
