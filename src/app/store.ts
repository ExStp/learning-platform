import themeSlice from "./slices/theme";
import counterSlice from "./slices/counter";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	counterSlice,
	themeSlice,
});

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
