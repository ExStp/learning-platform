import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/joy/styles";

import "./utils/i18next.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</React.StrictMode>
);
