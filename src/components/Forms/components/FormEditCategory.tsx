import { useState } from "react";
//Import style
import { Label, SmallButton } from "../FormStyle";
//Import Redux and store and action
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store";
import { addCategory } from "../../../state/categorySlice";

function FormEditCategory() {
	const [newCategory, setNewCategory] = useState<string>("");
	const dispatch = useDispatch<AppDispatch>();
	return (
		<div>
			<Label empty={true} className='nazwa'>
				<h3>Nowa kategoria:</h3>
				<input
					type='text'
					placeholder='Nazwa...'
					value={newCategory}
					onChange={(event) => {
						setNewCategory(event.target.value);
					}}></input>
			</Label>
			<div className='btn-container'>
				<SmallButton
					onClick={(e) => {
						e.preventDefault();
						dispatch(addCategory(newCategory));
						setNewCategory("");
					}}>
					Dodaj
				</SmallButton>
			</div>
		</div>
	);
}

export default FormEditCategory;
