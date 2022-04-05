import { useState } from "react";

function FormPrice() {
	const [price, setPrice] = useState<number>();
	return (
		<label className='cena'>
			Cena
			<input
				type='number'
				value={price}
				onChange={(event) => {
					const value = Number(event.target.value);
					setPrice(value);
				}}></input>
		</label>
	);
}

export default FormPrice;
