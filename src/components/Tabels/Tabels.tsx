import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { removeElement } from "../../state/listSlice";

import styled from "styled-components";
const Div = styled.div`
	border: 2px solid black;
	margin: 10px;
	font-size: 10px;
`;

function Tabels() {
	const dispatch = useDispatch<AppDispatch>();
	const state = useSelector((state: RootState) => state);

	return (
		<div className='header'>
			<h1>
				{state
					? state.map((x) => (
							<Div key={x.id}>
								<h2>{x.id}</h2>
								<h2>{x.name}</h2>
								<h2>{x.description}</h2>
								<h2>{x.category}</h2>
								<h2>{x.price}</h2>
								<button
									onClick={() => {
										dispatch(removeElement(x.id));
									}}>
									usuń
								</button>
							</Div>
					  ))
					: null}
			</h1>
		</div>
	);
}

export default Tabels;
