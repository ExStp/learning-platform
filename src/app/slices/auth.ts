import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
	isAuth: boolean;
}

const initialAuth: IAuth = {
	isAuth: true,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialAuth,
	reducers: {
		toggleAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
	},
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
