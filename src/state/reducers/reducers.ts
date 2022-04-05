import { combineReducers } from "redux";
import summaryReducer from "./summaryReducer";

const reducers = combineReducers({
	summaryReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
