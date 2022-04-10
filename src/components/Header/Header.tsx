import React from "react";

import styled from "styled-components";
const Div = styled.div`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		background-color: #ffffffcc;
		box-shadow: 0 0 5px lightgrey;
		padding: 10px;
		border-radius: 5px;
		color: grey;
		text-align: center;
	}
`;
function Header() {
	return (
		<Div className='header'>
			<h1>Nowe stanowisko komputerowe</h1>
		</Div>
	);
}

export default Header;
