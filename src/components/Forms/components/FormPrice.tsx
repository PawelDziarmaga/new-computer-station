//Import style
import { Label } from "../FormStyle";

type PropsType = {
	price: number;
	setPrice: (e: number) => void;
};

function FormPrice(props: PropsType) {
	return (
		<Label empty={true} className='cena'>
			<h3>Cena</h3>
			<input
				type='number'
				value={props.price === 0 ? "" : props.price}
				onChange={(event) => {
					if (event.target.valueAsNumber >= 0) {
						props.setPrice(event.target.valueAsNumber);
					}
				}}></input>
			<span>zł</span>
		</Label>
	);
}

export default FormPrice;
