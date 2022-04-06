type PropsType = {
	price: number | undefined;
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
					const value = Number(event.target.value);
					props.setPrice(value);
				}}></input>
		</label>
	);
}

export default FormPrice;
