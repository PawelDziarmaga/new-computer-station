import { Action } from "../actions/actions";
import { ActionType } from "../actionTypes/actionsTypes";

const initialstate = [
	{
		id: 1,
		name: "procesor",
		description: "Intel Core i9",
		category: "podzespoły komputera",
		price: 3099.55,
	},
	{
		id: 2,
		name: "obudowa",
		description: "SilentiumPC",
		category: "podzespoły komputera",
		price: 259.99,
	},
	{
		id: 3,
		name: "głośniki",
		description: "JBL GO 3",
		category: "urządzenia peryferyjne",
		price: 169.0,
	},
	{
		id: 4,
		name: "biurko",
		description: "Biurko ULTRADESK Frag",
		category: "inne",
		price: 599.99,
	},
];

type initialstateType = {
	id: number;
	name: string;
	description: string;
	category: string | undefined;
	price: number | undefined;
}[];

const summaryReducer = (
	state: initialstateType = initialstate,
	action: Action
) => {
	switch (action.type) {
		case ActionType.ADD:
			state.push(action.payload);
			console.log(state);
			return state;
		case ActionType.EDIT:
			return state;
		case ActionType.DELETE:
			return state;
		default:
			return state;
	}
};

export default summaryReducer;
