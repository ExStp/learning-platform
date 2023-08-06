import authSlice from "./slices/auth";
import modalsSlice from "./slices/modals";
import themeSlice from "./slices/theme";
import counterSlice from "./slices/counter";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { wordsAPI } from "./services/wordsAPI";

const rootReducer = combineReducers({
	counterSlice,
	themeSlice,
	modalsSlice,
	authSlice,
	[wordsAPI.reducerPath]: wordsAPI.reducer,
});

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wordsAPI.middleware),
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
