import React, { useState, useEffect } from "react";

import { State } from "../../state/index";
import { useSelector } from "react-redux";

import styled from "styled-components";
const Div = styled.div`
	border: 2px solid black;
	margin: 10px;
	font-size: 10px;
`;

type stateType = {
	id: number;
	name: string;
	description: string;
	category: string | undefined;
	price: number | undefined;
}[];

function Tabels() {
	const state: stateType = useSelector(
		(state: State) => state.summaryReducer
	);
	const [elements, setElements] = useState<JSX.Element | JSX.Element[]>(
		state.map((x) => {
			return (
				<Div key={x.id}>
					<h2>{x.name}</h2>
					<h2>{x.description}</h2>
					<h2>{x.category}</h2>
					<h2>{x.price}</h2>
				</Div>
			);
		})
	);
	useEffect(() => {
		setElements(
			state.map((x) => {
				return (
					<Div key={x.id}>
						<h2>{x.name}</h2>
						<h2>{x.description}</h2>
						<h2>{x.category}</h2>
						<h2>{x.price}</h2>
					</Div>
				);
			})
		);
	}, [state]);
	return (
		<div className='header'>
			<h1>{elements}</h1>
		</div>
	);
}

export default Tabels;
