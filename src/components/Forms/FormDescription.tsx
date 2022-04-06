type PropsType = {
	description: string;
	setDescription: (e: string) => void;
};

function FormDescription(props: PropsType) {
	return (
		<label className='opis'>
			Nazwa
			<input
				type='text'
				placeholder='Opis...'
				value={props.description}
				onChange={(event) => {
					props.setDescription(event.target.value);
				}}></input>
		</label>
	);
}

export default FormDescription;
