import { Component } from "react";
import Section from "./Section";
import $ from "./style.css";

class Sections extends Component {
	state = {
		hoveredIndex: null,
		activeIndex: null,
	};

	handleClick(index = null) {
		this.setState({ activeIndex: index, hoveredIndex: null });
	}

	handleHover(index = null) {
		this.setState({ hoveredIndex: index });
	}

	handleReturn(index) {
		this.setState({ activeIndex: null });
	}

	render() {
		const { items } = this.props;
		const { hoveredIndex, activeIndex } = this.state;

		const sectionsClasses =
			activeIndex == null
				? hoveredIndex == null
					? $.sections
					: $.sections_hovered
				: $.sections_active;

		return (
			<div className={sectionsClasses}>
				{items.map((section, key) => {
					const sectionClasses =
						activeIndex == key
							? $.section_active
							: hoveredIndex == key
								? $.section_hovered
								: $.section;

					return (
						<div
							key={key}
							className={sectionClasses}
							style={{ backgroundImage: `url(${section.image})` }}
							onClick={
								activeIndex ? null : () => this.handleClick(key)
							}
							onMouseEnter={() => this.handleHover(key)}
							onMouseLeave={() => this.handleHover()}
						>
							<Section
								isActive={activeIndex == key ? true : false}
								isHovered={hoveredIndex == key ? true : false}
								separator={section.separator}
								image={section.image}
								heading={section.heading}
								subheading={section.subheading}
								content={section.content}
								overlay
								onReturn={() => this.handleReturn()}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Sections;
