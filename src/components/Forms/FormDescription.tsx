import { useState } from "react";

function FormDescription() {
	const [description, setDescription] = useState<string>("");
	return (
		<label className='opis'>
			Nazwa
			<input
				type='text'
				placeholder='Opis...'
				value={description}
				onChange={(event) => {
					setDescription(event.target.value);
				}}></input>
		</label>
	);
}

export default FormDescription;
