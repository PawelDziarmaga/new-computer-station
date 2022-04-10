//Import tools
import jsPDF from "jspdf";
//Import icons
import excel from "../../icons/excel.png";
import pdf from "../../icons/pdf.png";
//Import style
import { SmallButton } from "../Forms/FormStyle";
import styled from "styled-components";
const Div = styled.div`
	width: 50%;
	margin: 0 auto;
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
	const ExportTablesExcel = () => {
		const html = htmltable ? htmltable.outerHTML : null;
		if (html) {
			window.open(
				"data:application/vnd.ms-excel," + encodeURIComponent(html)
			);
		}
	};
	const ExportTablesPDF = () => {
		console.log("dupa");
		const pdf = new jsPDF("l", "pt", "A3");
		pdf.setFontSize(5);

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
