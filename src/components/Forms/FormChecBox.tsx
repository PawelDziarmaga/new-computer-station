function FormChecBox() {
	return (
		<label className='kategoria'>
			Kategoria
			<label className='podzepoly'>
				podzespoły
				<input
					type='checkbox'
					name='podzespoły'
					value='podzespoły'></input>
			</label>
			<label className='urządzenia'>
				urządzenia
				<input
					type='checkbox'
					name='urządzenia'
					value='urządzenia'></input>
			</label>
			<label className='oprogramowanie'>
				oprogramowanie
				<input
					type='checkbox'
					name='oprogramowanie'
					value='false'></input>
			</label>
			<label className='inne'>
				inne
				<input type='checkbox' name='inne' value='inne'></input>
			</label>
		</label>
	);
}

export default FormChecBox;
