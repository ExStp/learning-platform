import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "../types/ITheme";
import { defaultTheme } from "../../assets/theme/defaultTheme";

const initialTheme: ITheme = defaultTheme;

export const themeSlice = createSlice({
	name: "theme",
	initialState: initialTheme,
	reducers: {
		setColorScheme: (state, action: PayloadAction<ITheme["colorSchemes"]>) => {
			state.colorSchemes = action.payload;
		},
	},
});

export const { setColorScheme } = themeSlice.actions;
export default themeSlice.reducer;
