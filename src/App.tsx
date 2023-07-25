import { theme } from "./assets/theme/theme";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { Playground } from "./layout/Playground";

function App() {
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
			<Box sx={{ display: "flex", minHeight: "100dvh", justifyContent: 'center', alignItems: 'center' }}>
				<Playground />
			</Box>
		</CssVarsProvider>
	);
}

export default App;
