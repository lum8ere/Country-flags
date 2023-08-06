import React from "react";
import EmojiFlag from "../emojiFlag/EmojiFlag";
import ImgFlag from "../imgFlag/ImgFlag";
import ICountryFlag from "../interfaces/ICountryFlag";

const CountryFlag = ({
	countryCode,
	flagsStyle,
	emojiStyle,
	svg = false,
}: ICountryFlag) => {
	if (svg) {
		return <ImgFlag countryCode={countryCode} style={flagsStyle} />;
	}

	return <EmojiFlag countryCode={countryCode} style={emojiStyle} />;
};

export default CountryFlag;
