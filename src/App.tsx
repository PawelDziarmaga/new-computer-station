import React from "react";

import { Provider } from "react-redux";
import { store } from "./state/store";

import Header from "./components/Header/Header";
import Forms from "./components/Forms/Forms";
import Tabels from "./components/Tabels/Tabels";

import img from "./icons/paint-g997428b64_1920.jpg";

import styled, { createGlobalStyle } from "styled-components";

export const Div = styled.div<{ imgUrl: string }>`
	background-size: contain;
	background-position: center;
	background: url(${(props) => props.imgUrl});
	padding: 10px 0;
	min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

function App() {
	return (
		<React.Fragment>
			<Provider store={store}>
				<Div imgUrl={img} className='App'>
					<Header />
					<Forms />
					<Tabels />
				</Div>
			</Provider>

			<GlobalStyle />
		</React.Fragment>
	);
}

export default App;
