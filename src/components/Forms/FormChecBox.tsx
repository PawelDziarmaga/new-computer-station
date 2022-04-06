import { useState } from "react";

type PropsType = {
	setCategory: (e: string) => void;
};

function FormChecBox(props: PropsType) {
	const [hardware, setHardware] = useState<boolean>(false);
	const [software, setSoftware] = useState<boolean>(false);
	const [devices, setDevices] = useState<boolean>(false);
	const [other, setOther] = useState<boolean>(false);

	const handleChange = (e: string) => {
		props.setCategory(e);
	};

	return (
		<label className='kategoria'>
			Kategoria
			<label className='podzepoly'>
				podzespoły
				<input
					type='checkbox'
					name='podzespoły'
					value='podzespoły'
					checked={hardware}
					onChange={(e) => {
						setHardware(e.target.checked);
						setSoftware(false);
						setDevices(false);
						setOther(false);
						handleChange(e.target.value);
					}}></input>
			</label>
			<label className='urządzenia'>
				urządzenia
				<input
					type='checkbox'
					name='urządzenia'
					value='urządzenia'
					checked={devices}
					onChange={(e) => {
						setHardware(false);
						setSoftware(false);
						setDevices(e.target.checked);
						setOther(false);
						handleChange(e.target.value);
					}}></input>
			</label>
			<label className='oprogramowanie'>
				oprogramowanie
				<input
					type='checkbox'
					name='oprogramowanie'
					value='oprogramowanie'
					checked={software}
					onChange={(e) => {
						setHardware(false);
						setSoftware(e.target.checked);
						setDevices(false);
						setOther(false);
						handleChange(e.target.value);
					}}></input>
			</label>
			<label className='inne'>
				inne
				<input
					type='checkbox'
					name='inne'
					value='inne'
					checked={other}
					onChange={(e) => {
						setHardware(false);
						setSoftware(false);
						setDevices(false);
						setOther(e.target.checked);
						handleChange(e.target.value);
					}}></input>
			</label>
		</label>
	);
}

export default FormChecBox;
