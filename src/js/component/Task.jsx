import React, { useState } from "react";
import PropTypes from "prop-types";

export function Task({ onClick, index, label }) {
	const [visible, setVisible] = useState("disable");

	return (
		<li
			key={index}
			onMouseEnter={e => setVisible("visible")}
			onMouseLeave={e => setVisible("disable")}>
			{label}
			<span
				className={visible}
				onClick={onClick}
				onMouseEnter={e => setVisible("visible")}
				onMouseLeave={e => setVisible("disable")}>
				✖
			</span>
		</li>
	);
}

Task.propTypes = {
	onClick: PropTypes.func,
	index: PropTypes.number,
	label: PropTypes.string
};
