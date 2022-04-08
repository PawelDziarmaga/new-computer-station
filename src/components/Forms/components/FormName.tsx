//Import style
import { Label } from "../FormStyle";

type PropsType = {
	validationName: boolean;
	name: string;
	setName: (e: string) => void;
};

function FormName(props: PropsType) {
	return (
		<Label empty={props.validationName} className='nazwa'>
			<h3>Nazwa:</h3>
			<input
				type='text'
				placeholder='Nazwa...'
				value={props.name}
				onChange={(event) => {
					props.setName(event.target.value);
				}}></input>
		</Label>
	);
}

export default FormName;
