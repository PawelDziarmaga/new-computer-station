import FormName from "./FormName";
import FormDescription from "./FormDescription";
import FormChecBox from "./FormChecBox";
import FormPrice from "./FormPrice";

function Forms() {
	return (
		<div>
			<form>
				<FormName />
				<FormChecBox />
				<FormDescription />
				<FormPrice />
			</form>
		</div>
	);
}

export default Forms;
