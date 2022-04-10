import { useState } from "react";
//Import Redux and store and action
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addElement } from "../../state/listSlice";
//Import style
import { Form, Button } from "./FormStyle";
//Import components
import FormName from "./components/FormName";
import FormDescription from "./components/FormDescription";
import FormChecBox from "./components/FormChecBox";
import FormPrice from "./components/FormPrice";

function Forms() {
	const dispatch = useDispatch<AppDispatch>();

	const [description, setDescription] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [category, setCategory] = useState<string>();

	//Table validation
	const [validationName, setValidationName] = useState<boolean>(true);
	const [validationCate, setValidationCate] = useState<boolean>(true);
	const [validationDesc, setValidationDesc] = useState<boolean>(true);
	const tableValidation = () => {
		if (name.length < 1) {
			setValidationName(false);
		} else {
			setValidationName(true);
		}
		if (!category) {
			setValidationCate(false);
		} else {
			setValidationCate(true);
		}
		if (description.length < 1) {
			setValidationDesc(false);
		} else {
			setValidationDesc(true);
		}
	};

	//Generate unique ID
	const listState = useSelector((state: RootState) => state.listSlice);
	let id = 0;
	const generateId = () => {
		let ids: number[] = [];
		listState.forEach((element) => {
			ids.push(element.id);
		});
		ids.sort((a, b) => b - a);
		id = ids[0] ? ids[0] + 1 : id + 1;
	};
	const addHendler = () => {
		tableValidation();
		if (description.length < 1 || name.length < 1 || !category) {
			return;
		}
		setDescription("");
		setName("");
		setPrice(0);
		setCategory("");
		generateId();
		const newElement = {
			id,
			name,
			description,
			category,
			price,
			qty: 1,
		};
		dispatch(addElement(newElement));
	};

	return (
		<Form>
			<FormName
				validationName={validationName}
				name={name}
				setName={setName}
			/>
			<FormPrice price={price} setPrice={setPrice} />
			<FormDescription
				validationDesc={validationDesc}
				description={description}
				setDescription={setDescription}
			/>
			<FormChecBox
				validationCate={validationCate}
				category={category}
				setCategory={setCategory}
			/>

			<Button
				onClick={(e) => {
					e.preventDefault();
					addHendler();
				}}>
				Dodaj
			</Button>
		</Form>
	);
}

export default Forms;
