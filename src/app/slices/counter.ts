import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
	value: number;
}

const initialCounter: ICounter = {
	value: 1,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounter,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
