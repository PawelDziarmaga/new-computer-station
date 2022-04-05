import { ActionType } from "../actionTypes/actionsTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/actions";

type PayloadType = {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
};

export const addElement = (amount: PayloadType) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.ADD,
			payload: amount,
		});
	};
};
export const editdElement = (amount: PayloadType) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.EDIT,
			payload: amount,
		});
	};
};
export const deleteElement = (amount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DELETE,
			payload: amount,
		});
	};
};
