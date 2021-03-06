import { useState } from "react";

//Import Redux and store and action
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../state/store";
import { removeCategory } from "../../../state/categorySlice";
import { removeElement } from "../../../state/listSlice";

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
	const listState = useSelector((state: RootState) => state.listSlice);
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (e: string) => {
		props.setCategory(e);
	};

	const removeElementsOfCategory = (category: string) => {
		listState
			.filter((x) => x.category === category)
			.forEach((element) => {
				dispatch(removeElement(element.id));
			});
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
								removeElementsOfCategory(element);
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
