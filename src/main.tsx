import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/joy/styles";

import "./utils/i18next.ts";
import { setupStore } from "./app/store.ts";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

const store = setupStore();


const app = initializeApp({
	apiKey: "AIzaSyBoSV7wldxZIrd6D9ybcujX8HZlkIUMVhg",
	authDomain: "react-chat-f415b.firebaseapp.com",
	projectId: "react-chat-f415b",
	storageBucket: "react-chat-f415b.appspot.com",
	messagingSenderId: "962292792033",
	appId: "1:962292792033:web:caa4f486620a015aa5d5a0",
	measurementId: "G-LXWQ1KGJYC",
});

const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</Provider>
	</React.StrictMode>
);
