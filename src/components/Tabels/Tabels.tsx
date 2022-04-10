//Import Redux and store and action
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { removeElement, addQuantity, subQuantity } from "../../state/listSlice";
//Import style
import { Table, Div } from "./TableStyle";
import { MiniButton, SmallButton } from "../Forms/FormStyle";
//Import components
import ExortTables from "./ExportTables";
import TablesSum from "./TablesSum";

function Tabels() {
	//Redux
	const dispatch = useDispatch<AppDispatch>();
	const listState = useSelector((state: RootState) => state.listSlice);
	const categorySlice = useSelector(
		(state: RootState) => state.categorySlice
	);
	//Create table
	const tableCategory = categorySlice.map((category) => {
		//Price counter
		let sumPrice: number = 0;
		listState
			.filter((x) => x.category === category)
			.forEach((suma) => {
				sumPrice = sumPrice + suma.price * suma.qty;
			});
		//Qty counter
		let sumQty: number = 0;
		listState
			.filter((x) => x.category === category)
			.forEach((suma) => {
				sumQty += suma.qty;
			});
		//Crrate tables for all category
		return listState.filter((x) => x.category === category).length ? (
			<Table id={category} key={category}>
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
					{/*Crrate elements for all tables*/}
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

										<MiniButton
											className='btn'
											onClick={(e) => {
												console.log(element.id);
												dispatch(
													subQuantity(element.id)
												);
											}}>
											-
										</MiniButton>
										<MiniButton
											className='btn'
											onClick={(e) =>
												dispatch(
													addQuantity(element.id)
												)
											}>
											+
										</MiniButton>
									</td>
									<td className='fourths-row'>
										{element.price} zł
									</td>
									<td
										className='fifth-row'
										onClick={(e) =>
											dispatch(removeElement(element.id))
										}>
										<SmallButton>Usuń</SmallButton>
									</td>
								</tr>
							);
						})}
				</tbody>

				<tfoot>
					<tr>
						<th className='first-row'></th>
						<th className='second-row'></th>
						<th className='third-row'>{sumQty} szt.</th>
						<th className='fourths-row'>{sumPrice} zł</th>
						<th className='fifth-row'></th>
					</tr>
				</tfoot>
			</Table>
		) : null;
	});

	return (
		<div>
			<Div id='table_Container'>
				{tableCategory} <TablesSum />
			</Div>

			<ExortTables />
		</div>
	);
}

export default Tabels;
