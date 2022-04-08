//Import Redux and store and action
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { removeElement, addQuantity, subQuantity } from "../../state/listSlice";
//Import style
import { Table } from "./TableStyle";

function Tabels() {
	const dispatch = useDispatch<AppDispatch>();
	const listState = useSelector((state: RootState) => state.listSlice);
	const categorySlice = useSelector(
		(state: RootState) => state.categorySlice
	);

	const tableCategory = categorySlice.map((category) => {
		let sumPrice: number = 0;
		listState
			.filter((x) => x.category === category)
			.forEach((suma) => {
				sumPrice = sumPrice + suma.price * suma.qty;
			});
		let sumQty: number = 0;
		listState
			.filter((x) => x.category === category)
			.forEach((suma) => {
				sumQty += suma.qty;
			});
		return listState.filter((x) => x.category === category).length ? (
			<table key={category}>
				<thead key={category}>
					<tr>
						<th className='table-name' colSpan={4}>
							{category}
						</th>
					</tr>
					<tr>
						<th className='first-row'>Nazwa</th>
						<th className='second-row'>Opis</th>
						<th className='third-row'>Ilość</th>
						<th className='fourths-row'>Cena</th>
						<th className='fifth-row'></th>
					</tr>
				</thead>

				<tbody>
					{listState
						.filter((x) => x.category === category)
						.map((element) => {
							return (
								<tr key={element.id}>
									<td className='first-row'>
										{element.name}
									</td>
									<td className='second-row'>
										{element.description}
									</td>
									<td className='third-row'>
										{element.qty}

										<span
											className='btn'
											onClick={(e) =>
												dispatch(
													subQuantity(element.id)
												)
											}>
											-
										</span>
										<span
											className='btn'
											onClick={(e) =>
												dispatch(
													addQuantity(element.id)
												)
											}>
											+
										</span>
									</td>
									<td className='fourths-row'>
										{element.price}
									</td>
									<td
										className='fifth-row'
										onClick={(e) =>
											dispatch(removeElement(element.id))
										}>
										usuń
									</td>
								</tr>
							);
						})}
				</tbody>

				<tfoot>
					<tr>
						<th className='first-row'></th>
						<th className='second-row'></th>
						<th className='third-row'>{sumQty}</th>
						<th className='fourths-row'>{sumPrice}</th>
						<th className='fifth-row'></th>
					</tr>
				</tfoot>
			</table>
		) : null;
	});

	return <Table>{tableCategory}</Table>;
}

export default Tabels;
