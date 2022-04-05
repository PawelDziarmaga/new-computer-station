import { useState } from "react";

function FormName() {
	const [name, setName] = useState<string>("");
	return (
		<label className='nazwa'>
			Nazwa
			<input
				type='text'
				placeholder='Nazwa...'
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}></input>
		</label>
	);
}

export default FormName;
