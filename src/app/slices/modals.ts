import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModals {
	settingsUI: boolean;
	userAuth: boolean;
}

const initialModals: IModals = {
	settingsUI: false,
	userAuth: false,
};

export const modalsSlice = createSlice({
	name: "modals",
	initialState: initialModals,
	reducers: {
		toggleSettingsUI: (state, action: PayloadAction<boolean>) => {
			state.settingsUI = action.payload;
		},
		toggleUserAuth: (state, action: PayloadAction<boolean>) => {
			state.userAuth = action.payload;
		},
	},
});

export const { toggleSettingsUI, toggleUserAuth } = modalsSlice.actions;
export default modalsSlice.reducer;
