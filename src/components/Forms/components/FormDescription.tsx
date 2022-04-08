//Import style
import { DescriptionLabel } from "../FormStyle";

type PropsType = {
	validationDesc: boolean;
	description: string;
	setDescription: (e: string) => void;
};

function FormDescription(props: PropsType) {
	return (
		<DescriptionLabel empty={props.validationDesc} className='opis'>
			<h3>Opis</h3>
			<textarea
				rows={3}
				placeholder='Opis...'
				value={props.description}
				onChange={(event) => {
					props.setDescription(event.target.value);
				}}></textarea>
		</DescriptionLabel>
	);
}

export default FormDescription;
