import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/joy/styles";

import "./utils/i18next.ts";
import { setupStore } from "./app/store.ts";
import { Provider } from "react-redux";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</Provider>
	</React.StrictMode>
);
