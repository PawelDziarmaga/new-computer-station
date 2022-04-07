type PropsType = {
	price: number;
	setPrice: (e: number) => void;
};

function FormPrice(props: PropsType) {
	return (
		<label className='cena'>
			Cena
			<input
				type='number'
				value={props.price}
				onChange={(event) => {
					props.setPrice(event.target.valueAsNumber);
				}}></input>
		</label>
	);
}

export default FormPrice;
