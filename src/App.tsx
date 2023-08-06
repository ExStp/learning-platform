import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { useAppSelector } from "./app/hooks/redux";
import { extendTheme } from "@mui/joy/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./layout/Header";
import { Error } from "./pages/Error";
import { ROUTES } from "./app/routers/routes";
import { Home } from "./pages/Home";
import { Container } from "@mui/joy";
import { Dictionary } from "./pages/Dictionary/Dictionary";
import { WordExplore } from "./pages/Dictionary/WordExplore";

function App() {
	const theme = useAppSelector((state) => state.themeSlice);
	const router = createBrowserRouter([
		{
			path: ROUTES.HOME,
			element: <Home />,
		},
		{
			path: ROUTES.DICTIONARY,
			element: <Dictionary />,
			children: [
				{
					path: ROUTES.WORD_EXPLORE,
					element: <WordExplore />,
				},
			],
		},
		{
			path: ROUTES.NOT_FOUND,
			element: <Error />,
		},
	]);

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
					minHeight: "100dvh",
				}}
			>
				<Header />
				<Container
					sx={{
						pt: "60px",
						minHeight: "100dvh",
					}}
				>
					<RouterProvider router={router} />
				</Container>
			</Box>
		</CssVarsProvider>
	);
}

export default App;
