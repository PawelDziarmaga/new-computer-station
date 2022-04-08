import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
	"Podzespół",
	"Urządzenia",
	"Oprogramowanie",
	"Inne",
] as initialStateType;

type initialStateType = string[];

const categorySlice = createSlice({
	name: "List",
	initialState,
	reducers: {
		addCategory: (state, action: PayloadAction<string>) => {
			state.push(action.payload);
		},
		removeCategory(state, action: PayloadAction<string>) {
			const index = state.findIndex((x) => x === action.payload);
			state.splice(index, 1);
		},
	},
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
