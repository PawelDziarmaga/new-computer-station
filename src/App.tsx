import React from "react";

import { Provider } from "react-redux";
import { store } from "./state";

import Header from "./components/Header/Header";
import Forms from "./components/Forms/Forms";

import { createGlobalStyle } from "styled-components";

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
				<div className='App'>
					<Header />
					<Forms />
				</div>
			</Provider>

			<GlobalStyle />
		</React.Fragment>
	);
}

export default App;
