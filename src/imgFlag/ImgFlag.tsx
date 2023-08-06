import React from "react";
import FlagURLConstructor from "../helpers/FlagURLConstructor";
import IImgFlag from "../interfaces/iImgFlag";
import { DEFAULT_CDN_SUFFIX, DEFAULT_CDN_URL } from '../helpers/config'

const ImgFlag = ({
	countryCode,
	style,
	...props
}: IImgFlag) => {
	if (typeof countryCode !== "string") {
		return null;
	}

	const flagURLConstructor = new FlagURLConstructor(DEFAULT_CDN_URL, DEFAULT_CDN_SUFFIX);
	const flagUrl = flagURLConstructor.getFlagURL(countryCode);

	return (
		<img
			{...props}
			src={flagUrl}
			style={{
				display: "inline-block",
				width: "1em",
				height: "1em",
				verticalAlign: "middle",
				...style,
			}}
		/>
	);
};

export default ImgFlag;
