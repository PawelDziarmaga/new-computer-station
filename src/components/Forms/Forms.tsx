import { useState } from "react";

import { actionCreators } from "../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import FormName from "./FormName";
import FormDescription from "./FormDescription";
import FormChecBox from "./FormChecBox";
import FormPrice from "./FormPrice";

function Forms() {
	const dispatch = useDispatch();
	const { addElement } = bindActionCreators(actionCreators, dispatch);

	const [description, setDescription] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>();
	const [category, setCategory] = useState<string>();

	const addHendler = () => {
		if (!description || !name || !price || !category) {
			return;
		}
		setDescription("");
		setName("");
		setPrice(0);
		setCategory("");

		const newElement = {
			id: 4,
			name,
			description,
			category,
			price,
		};
		addElement(newElement);
	};

	return (
		<div>
			<form>
				<FormName name={name} setName={setName} />
				<FormChecBox setCategory={setCategory} />
				<FormDescription
					description={description}
					setDescription={setDescription}
				/>
				<FormPrice price={price} setPrice={setPrice} />
				<button
					onClick={(e) => {
						e.preventDefault();
						addHendler();
					}}>
					Dodaj
				</button>
			</form>
		</div>
	);
}

export default Forms;
