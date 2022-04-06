type PropsType = {
	name: string;
	setName: (e: string) => void;
};

function FormName(props: PropsType) {
	return (
		<label className='nazwa'>
			Nazwa
			<input
				type='text'
				placeholder='Nazwa...'
				value={props.name}
				onChange={(event) => {
					props.setName(event.target.value);
				}}></input>
		</label>
	);
}

export default FormName;
