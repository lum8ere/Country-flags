import CountryCode from "../types/CountryCodes";

export default interface IImgFlag {
	countryCode: CountryCode;
	style?: React.CSSProperties;
	cdnSuffix?: string;
	cdnUrl?: string;
}