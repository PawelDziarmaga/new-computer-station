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
	//Redux state import
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
			{sumQty !== 0 ? (
				<tbody>
					<Tr>
						<th className='first-row'></th>
						<th className='second-row'>Podsumowanie:</th>
						<th className='third-row'>
							{Math.ceil(sumQty * 100) / 100} szt.
						</th>
						<th className='fourths-row'>
							{Math.ceil(sumPrice * 100) / 100} zł
						</th>
						<th className='fifth-row'></th>
					</Tr>
				</tbody>
			) : null}
		</Table>
	);
}

export default TablesSum;
