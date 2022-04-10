import { useState } from "react";

//Import Redux and store and action
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../state/store";
import { removeCategory } from "../../../state/categorySlice";

//Import components
import FormEditCategory from "./FormEditCategory";
//Import style
import { Categorylabel, SmallButton, MiniButton } from "../FormStyle";

type PropsType = {
	validationCate: boolean;
	category: string | undefined;
	setCategory: (e: string) => void;
};

function FormChecBox(props: PropsType) {
	const [edit, setEdit] = useState<Boolean>(false);

	const state = useSelector((state: RootState) => state.categorySlice);
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (e: string) => {
		props.setCategory(e);
	};

	return (
		<Categorylabel empty={props.validationCate} className='kategoria'>
			<h3>Kategoria</h3>
			{state.map((element: string) => (
				<label key={element} className={element}>
					<input
						type='checkbox'
						name={element}
						value={element}
						checked={element === props.category}
						onChange={(e) => {
							handleChange(e.target.value);
						}}></input>
					{element}
					{edit ? (
						<MiniButton
							onClick={(e) => {
								e.preventDefault();
								dispatch(removeCategory(element));
							}}>
							X
						</MiniButton>
					) : null}
				</label>
			))}
			<div className='btn-container'>
				<SmallButton
					onClick={(e) => {
						e.preventDefault();
						setEdit(!edit);
					}}>
					{edit ? "Zamknij " : "Edytuj"}
				</SmallButton>
				{edit ? <FormEditCategory /> : null}
			</div>
		</Categorylabel>
	);
}

export default FormChecBox;
