import { ActionType } from "../actionTypes/actionsTypes";

interface AddAction {
	type: ActionType.ADD;
	payload: {
		id: number;
		name: string;
		description: string;
		category: string | undefined;
		price: number | undefined;
	};
}

interface DeleteAction {
	type: ActionType.DELETE;
	payload: number;
}

interface EditAction {
	type: ActionType.EDIT;
	payload: {
		id: number;
		name: string;
		description: string;
		category: string | undefined;
		price: number | undefined;
	};
}

export type Action = AddAction | DeleteAction | EditAction;
