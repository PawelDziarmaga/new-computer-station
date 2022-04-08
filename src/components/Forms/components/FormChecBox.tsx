//Import Redux and store and action
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { removeElement } from "../../../state/listSlice";
//Import style
import { Categorylabel } from "../FormStyle";

type PropsType = {
	validationCate: boolean;
	category: string | undefined;
	setCategory: (e: string) => void;
};

function FormChecBox(props: PropsType) {
	const dispatch = useDispatch<AppDispatch>();
	const state = useSelector((state: RootState) => state.categorySlice);

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
				</label>
			))}
		</Categorylabel>
	);
}

export default FormChecBox;
