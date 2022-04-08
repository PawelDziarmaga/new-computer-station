import { useState } from "react";
//Import Redux and store and action
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { addElement } from "../../state/listSlice";
//Import style
import { Form, Button } from "./FormStyle";
//Import components
import FormName from "./components/FormName";
import FormDescription from "./components/FormDescription";
import FormChecBox from "./components/FormChecBox";
import FormPrice from "./components/FormPrice";

let id: number = 0;

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
		if (name.length < 3) {
			setValidationName(false);
		} else {
			setValidationName(true);
		}
		console.log(validationCate);
		if (!category) {
			setValidationCate(false);
		} else {
			setValidationCate(true);
		}
		if (description.length < 5) {
			setValidationDesc(false);
		} else {
			setValidationDesc(true);
		}
	};

	const addHendler = () => {
		tableValidation();
		if (description.length < 5 || name.length < 3 || !category) {
			return;
		}
		setDescription("");
		setName("");
		setPrice(0);
		setCategory("");

		const newElement = {
			id,
			name,
			description,
			category,
			price,
		};
		dispatch(addElement(newElement));
		id++;
	};

	return (
		<Form>
			<FormName
				validationName={validationName}
				name={name}
				setName={setName}
			/>
			<FormChecBox
				validationCate={validationCate}
				category={category}
				setCategory={setCategory}
			/>
			<FormDescription
				validationDesc={validationDesc}
				description={description}
				setDescription={setDescription}
			/>
			<FormPrice price={price} setPrice={setPrice} />
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
