import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { useAppSelector } from "./app/hooks/redux";
import { extendTheme } from "@mui/joy/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./layout/Header";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./app/routers/PrivateRoute";
import { Error } from "./pages/Error";
import { PublicRoute } from "./app/routers/PublicRoute";
import { ROUTES } from "./app/routers/routes";

function App() {
	const theme = useAppSelector((state) => state.themeSlice);
	const router = createBrowserRouter([
		{
			path: ROUTES.CHAT,
			element: <PrivateRoute element={<Chat />} />,
		},
		{
			path: ROUTES.LOGIN,
			element: <PublicRoute element={<Login />} />,
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
					flexDirection: "column",
					display: "flex",
					minHeight: "100dvh",
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}
			>
				<Header />
				<RouterProvider router={router} />
			</Box>
		</CssVarsProvider>
	);
}

export default App;
