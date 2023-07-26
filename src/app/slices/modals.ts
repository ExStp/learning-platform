import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModals {
	settingsUI: boolean;
}

const initialModals: IModals = {
	settingsUI: false,
};

export const modalsSlice = createSlice({
	name: "modals",
	initialState: initialModals,
	reducers: {
		toggleSettingsUI: (state, action: PayloadAction<boolean>) => {
			state.settingsUI = action.payload;
		},
	},
});

export const { toggleSettingsUI } = modalsSlice.actions;
export default modalsSlice.reducer;
