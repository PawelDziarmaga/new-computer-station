//Import Redux and store and action
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

//Import style
import { Table } from "./TableStyle";

import styled from "styled-components";
const Tr = styled.tr`
	th.first-row,
	th.second-row,
	th.fifth-row {
		border: none;
	}
	th.second-row {
		text-align: right;
	}
`;
function TablesSum() {
	//Redux

	const listState = useSelector((state: RootState) => state.listSlice);
	let sumPrice: number = 0;
	listState.forEach((suma) => {
		sumPrice = sumPrice + suma.price * suma.qty;
	});
	let sumQty: number = 0;
	listState.forEach((suma) => {
		sumQty += suma.qty;
	});

	return (
		<Table>
			<Tr>
				<th className='first-row'></th>
				<th className='second-row'>Podsumowanie:</th>
				<th className='third-row'>{sumQty} szt.</th>
				<th className='fourths-row'>{sumPrice} zł</th>
				<th className='fifth-row'></th>
			</Tr>
		</Table>
	);
}

export default TablesSum;
