//Import Redux and store and action
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { removeElement } from "../../state/listSlice";
//Import style
import { Table } from "./TableStyle";

function Tabels() {
	const dispatch = useDispatch<AppDispatch>();
	const listState = useSelector((state: RootState) => state.listSlice);
	const categorySlice = useSelector(
		(state: RootState) => state.categorySlice
	);

	const tableCategory = categorySlice.map((category) =>
		listState.filter((x) => x.category === category).length ? (
			<table>
				<thead key={category}>
					<tr>
						<th className='table-name' colSpan={4}>
							{category}
						</th>
					</tr>
					<tr>
						<th className='first-row'>Nazwa</th>
						<th className='second-row'>Opis</th>
						<th className='third-row'>Cena</th>
						<th className='fourths-row'></th>
					</tr>
				</thead>

				<tbody>
					{listState
						.filter((x) => x.category === category)
						.map((element) => (
							<tr key={element.id}>
								<td className='first-row'>{element.name}</td>
								<td className='second-row'>
									{element.description}
								</td>
								<td className='third-row'>{element.price}</td>
								<td
									className='fourths-row'
									onClick={(e) =>
										dispatch(removeElement(element.id))
									}>
									usuń
								</td>
							</tr>
						))}
				</tbody>
				<tfoot>
					<tr>
						<th className='first-row'></th>
						<th className='second-row'>suma</th>
						<th className='third-row'>
							{listState
								.filter((x) => x.category === category)
								.map((suma) => {
									let allPrice = 0;
									allPrice = allPrice + suma.price;
									return allPrice;
								})}
						</th>
						<th className='fourths-row'></th>
					</tr>
				</tfoot>
			</table>
		) : null
	);

	return <Table>{tableCategory}</Table>;
}

export default Tabels;
