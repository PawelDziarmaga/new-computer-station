import { useState } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { addElement } from "../../state/listSlice";

import FormName from "./FormName";
import FormDescription from "./FormDescription";
import FormChecBox from "./FormChecBox";
import FormPrice from "./FormPrice";

function Forms() {
	const dispatch = useDispatch<AppDispatch>();

	const [description, setDescription] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
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
			id: 5,
			name,
			description,
			category,
			price,
		};
		dispatch(addElement(newElement));
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
