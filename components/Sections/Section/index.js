import { Component } from "react";
import $ from "./style.css";

class Section extends Component {
	handleReturn() {
		const { onReturn } = this.props;

		if (typeof onReturn === "function") onReturn();
	}

	render() {
		const {
			isActive,
			isHovered,
			image,
			heading,
			subheading,
			content,
			separator,
			overlay,
		} = this.props;

		return (
			<b className={isActive ? $.section_active : $.section}>
				<b
					className={[
						isHovered ? $.overlay_active : $.overlay_unactive,
						$.overlay,
					].join(" ")}
				/>
				<b
					className={
						isActive ? $.section_content_active : $.section_content
					}
				>
					<b className={$.top}>
						<b className={$.separator}>
							<b className={$.line}>{separator}</b>
						</b>
						<b className={$.headings}>
							<b className={$.heading}>{heading}</b>
						</b>
					</b>
					<b className={$.bottom}>
						{isActive ? (
							<b className={$.content}>{content}</b>
						) : (
							<b className={$.subheading}>{subheading}</b>
						)}
					</b>
				</b>
				<b
					className={isActive ? $.return_active : $.return}
					onClick={() => this.handleReturn()}
				>
					Close
				</b>
			</b>
		);
	}
}

export default Section;
