import Sections from "~/components/Sections";
import data from "./data";
import $ from "./style.css";

export default () => (
	<div className={$.application}>
		<Sections items={data.sections} />
	</div>
);
