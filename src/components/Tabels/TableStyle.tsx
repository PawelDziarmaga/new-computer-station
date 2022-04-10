import styled from "styled-components";

export const Table = styled.table`
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
		font-size: 30px;
		color: grey;
	}
	.first-row {
		width: 20%;
	}
	.second-row {
		width: 45%;
	}
	.third-row {
		width: 9%;
		text-align: center;
	}
	.fourths-row {
		width: 15%;
		text-align: center;
	}
	.fifth-row {
		border: none;
		width: 7%;
		text-align: left;
		cursor: pointer;
	}
`;
export const Div = styled.div`
	width: 90%;
	margin: 0 auto;
`;
