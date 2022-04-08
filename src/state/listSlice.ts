import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//update initial stat by data from localStorage
let initialStateLocalStorage = JSON.parse(
	localStorage.getItem("initialStateList") || "{}"
);
let initialState = [] as initialStateType[];
if (initialStateLocalStorage.length > 0) {
	initialState = initialStateLocalStorage;
}
type initialStateType = {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	qty: number;
};

const listSLice = createSlice({
	name: "List",
	initialState,
	reducers: {
		addElement: (state, action: PayloadAction<initialStateType>) => {
			state.push(action.payload);
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
		removeElement(state, action: PayloadAction<number>) {
			const index = state.findIndex((x) => x.id === action.payload);
			state.splice(index, 1);
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
		addQuantity(state, action: PayloadAction<number>) {
			const index = state.findIndex((x) => x.id === action.payload);
			state[index].qty++;
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
		subQuantity(state, action: PayloadAction<number>) {
			const index = state.findIndex((x) => x.id === action.payload);
			if (state[index].qty === 0) {
				state.splice(index, 1);
			} else {
				state[index].qty--;
			}
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
	},
});

export const { addElement, removeElement, addQuantity, subQuantity } =
	listSLice.actions;
export default listSLice.reducer;
