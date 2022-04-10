//Import tools
import jsPDF from "jspdf";
//Import icons
import excel from "../../icons/excel.png";
import pdf from "../../icons/pdf.png";
//Import style
import { SmallButton } from "../Forms/FormStyle";
import styled from "styled-components";
import { useEffect } from "react";
const Div = styled.div`
	background-color: #ffffffcc;
	box-shadow: 0 0 5px lightgrey;
	padding: 10px;
	border-radius: 5px;
	width: 50%;
	margin: 10px auto;
	height: 10vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	img {
		height: 15px;
		margin-left: 10px;
	}
	@media (max-width: 800px) {
		width: 80%;
	}
`;
function ExortTables() {
	let htmltable = document.getElementById("table_Container");

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		htmltable = document.getElementById("table_Container");
	});

	const ExportTablesExcel = () => {
		const html = htmltable ? htmltable.outerHTML : null;
		if (html) {
			window.open(
				"data:application/vnd.ms-excel," + encodeURIComponent(html)
			);
		}
	};
	const ExportTablesPDF = () => {
		const pdf = new jsPDF("l", "pt", "A3");

		if (htmltable) {
			pdf.html(htmltable, {
				callback: function (doc) {
					doc.save();
				},
			});
		}
	};

	return (
		<Div>
			<SmallButton onClick={ExportTablesExcel}>
				Eksportuj do excel<img src={excel} alt='Exscel'></img>
			</SmallButton>
			<SmallButton onClick={ExportTablesPDF}>
				Eksportuj do pdf <img src={pdf} alt='PDF'></img>
			</SmallButton>
		</Div>
	);
}

export default ExortTables;
