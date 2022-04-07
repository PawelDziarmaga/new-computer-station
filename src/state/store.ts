import { configureStore } from "@reduxjs/toolkit";

import listSlice from "./listSlice";

export const store = configureStore({
	reducer: listSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
