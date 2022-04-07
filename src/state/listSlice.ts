import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [] as initialStateType[];

type initialStateType = {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
};

const listSLice = createSlice({
	name: "List",
	initialState,
	reducers: {
		addElement: (state, action: PayloadAction<initialStateType>) => {
			state.push(action.payload);
		},
		removeElement(state, action: PayloadAction<number>) {
			const index = state.findIndex((x) => x.id === action.payload);
			state.splice(index, 1);
		},
	},
});

export const { addElement, removeElement } = listSLice.actions;
export default listSLice.reducer;
