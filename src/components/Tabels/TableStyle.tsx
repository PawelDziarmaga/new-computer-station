import styled from "styled-components";

export const Table = styled.table`
	width: 90%;
	margin: 0 auto;
	table {
		width: 100%;
		margin: 10px auto;
		border-collapse: collapse;

		td,
		th {
			border: 1px solid lightgrey;
			padding: 5px;
		}
		.table-name {
			border: none;
		}
		.first-row {
			width: 25%;
		}
		.second-row {
			width: 50%;
		}
		.third-row {
			width: 5%;
			input {
				width: 100%;
				border: 1px solid lightgrey;
				padding: 2px;
			}
		}
		.fourths-row {
			width: 15%;
			text-align: center;
			cursor: pointer;
		}
		.fifth-row {
			width: 5%;
			text-align: center;
			cursor: pointer;
		}
		.btn {
			display: inline-block;
			height: 20px;
			width: 20px;
			text-align: center;
			border: 1px solid lightgrey;
			margin: 1px;
			cursor: pointer;
		}
	}
`;
