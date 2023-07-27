import authSlice from "./slices/auth";
import modalsSlice from "./slices/modals";
import themeSlice from "./slices/theme";
import counterSlice from "./slices/counter";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	counterSlice,
	themeSlice,
	modalsSlice,
	authSlice,
});

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
