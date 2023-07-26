import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from "../types/ITheme";
import { defaultTheme } from "../../assets/theme/defaultTheme";

const initialTheme: ITheme = defaultTheme;

export const themeSlice = createSlice({
	name: "theme",
	initialState: initialTheme,
	reducers: {
		
	},
});

// export const {} = themeSlice.actions;
export default themeSlice.reducer;
