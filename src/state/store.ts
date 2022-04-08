import { configureStore } from "@reduxjs/toolkit";

import listSlice from "./listSlice";
import categorySlice from "./categorySlice";

import { combineReducers } from "redux";

const reducers = combineReducers({
	listSlice,
	categorySlice,
});

export const store = configureStore({
	reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
