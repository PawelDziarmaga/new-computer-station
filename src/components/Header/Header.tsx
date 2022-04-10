import React from "react";

import styled from "styled-components";
const Div = styled.div`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		color: grey;
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
