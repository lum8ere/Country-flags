import React from "react";
import FlagURLConstructor from "../helpers/FlagURLConstructor";
import IImgFlag from "../interfaces/iImgFlag";

const DEFAULT_CDN_URL =
	"https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/";
const DEFAULT_CDN_SUFFIX = "svg";

const ImgFlag = ({
	countryCode,
	style,
	cdnSuffix = DEFAULT_CDN_SUFFIX,
	cdnUrl = DEFAULT_CDN_URL,
	...props
}: IImgFlag) => {
	if (typeof countryCode !== "string") {
		return null;
	}

	const flagURLConstructor = new FlagURLConstructor(cdnUrl, cdnSuffix);
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
