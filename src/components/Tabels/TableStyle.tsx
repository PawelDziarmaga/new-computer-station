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
			width: 30%;
		}
		.second-row {
			width: 50%;
		}
		.third-row {
			width: 10%;
		}
		.fourths-row {
			width: 5%;
			text-align: center;
			cursor: pointer;
		}
	}
`;
