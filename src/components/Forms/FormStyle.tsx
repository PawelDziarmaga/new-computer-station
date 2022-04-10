import styled from "styled-components";

export const Form = styled.form`
	background-color: #ffffffcc;
	box-shadow: 0 0 5px lightgrey;
	padding: 10px;
	border-radius: 5px;
	color: grey;
	display: flex;
	justify-content: space-around;
	align-items: stretch;
	flex-wrap: wrap;
	width: 75%;
	margin: 0 auto;
	label {
		margin: 2px;
		width: 48%;
		padding: 10px;
		@media (max-width: 850px) {
			width: 95%;
		}
	}
	@media (max-width: 1100px) {
		width: 90%;
	}
	@media (max-width: 850px) {
		width: 95%;
	}
`;

export const Label = styled.label<{ empty: boolean }>`
	border: 1px solid lightgrey;

	span {
		margin-left: 10px;
	}
	input {
		padding-left: 10px;
		height: 30px;
		width: 250px;

		background-color: white;
		border: 1px solid ${(props) => (props.empty ? "grey" : "red")};
		border-radius: 3px;
		transition: 0.2s ease-in-out;
		::placeholder {
			color: grey;
		}
		:focus {
			border: 2px solid black;
			background-color: #ffffff66;
		}
		@media (max-width: 400px) {
			width: 100%;
		}
	}
`;
export const DescriptionLabel = styled.label<{ empty: boolean }>`
	border: 1px solid lightgrey;
	color: grey;
	h3 {
	}
	textarea {
		padding-left: 10px;
		height: 90px;
		width: 80%;
		color: grey;
		background-color: white;
		border: 1px solid ${(props) => (props.empty ? "grey" : "red")};
		border-radius: 3px;
		transition: 0.5s ease-in-out;
		::placeholder {
			color: grey;
		}
		:focus {
			border: 2px solid black;
			background-color: #ffffff66;
		}
	}
`;
export const Categorylabel = styled.label<{ empty: boolean }>`
	border: 1px solid ${(props) => (props.empty ? "lightgrey" : "red")};
	color: grey;
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	@media (max-width: 420px) {
		justify-content: center;
	}
	h3 {
		width: 100%;
	}
	label {
		border: none;
		width: 50%;
		margin: 0;
		input {
			margin-right: 5px;
		}
		@media (max-width: 420px) {
			width: 80%;
		}
	}
	.btn-container {
		width: 100%;
	}
`;
export const Button = styled.button`
	margin: 50px;
	background-color: white;
	color: grey;
	font-size: 20px;
	height: 50px;
	width: 200px;
	border-radius: 5px;
	box-shadow: none;
	border: 1px solid lightgrey;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 4px grey;
	}
`;
export const SmallButton = styled.button`
	margin: 0;
	background-color: white;
	color: grey;
	font-size: 15px;
	height: 30px;
	padding: 0 5px;
	border-radius: 5px;
	box-shadow: none;
	border: 1px solid lightgrey;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 3px grey;
	}
`;
export const MiniButton = styled.button`
	margin-left: 5px;
	background-color: white;
	color: grey;
	font-size: 10px;
	height: 15px;
	width: 15px;
	border-radius: 4px;
	box-shadow: none;
	border: 1px solid lightgrey;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 2px grey;
	}
`;
