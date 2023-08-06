import React from "react";
import EmojiProps from "../interfaces/IEmoji";

const OFFSET = 127397;

const EmojiFlag = ({ countryCode, style, ...props }: EmojiProps) => {
	if (typeof countryCode !== "string") {
		return null;
	}

	const emoji = countryCode
		.toUpperCase()
		.replace(/./g, (char) =>
			String.fromCodePoint(char.charCodeAt(0) + OFFSET)
		);

	return (
		<span
			role="img"
			{...props}
			style={{
				display: "inline-block",
				fontSize: "1em",
				lineHeight: "1em",
				verticalAlign: "middle",
				...style,
			}}
		>
			{emoji}
		</span>
	);
};

export default EmojiFlag;
