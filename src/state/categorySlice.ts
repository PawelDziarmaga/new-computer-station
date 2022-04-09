import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//update initial stat by data from localStorage
let initialStateLocalStorage = JSON.parse(
	localStorage.getItem("initialStateCategory") || "{}"
);

let initialState = [
	"Podzespół",
	"Urządzenia",
	"Oprogramowanie",
	"Inne",
] as initialStateType;

if (initialStateLocalStorage.length > 0) {
	initialState = initialStateLocalStorage;
}

type initialStateType = string[];

const categorySlice = createSlice({
	name: "List",
	initialState,
	reducers: {
		addCategory: (state, action: PayloadAction<string>) => {
			state.push(action.payload);
			localStorage.setItem("initialStateCategory", JSON.stringify(state));
		},
		removeCategory(state, action: PayloadAction<string>) {
			const index = state.findIndex((x) => x === action.payload);
			state.splice(index, 1);
			localStorage.setItem("initialStateCategory", JSON.stringify(state));
		},
	},
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
