/// <reference types="react" />
import CountryCode from "../types/CountryCodes";
export default interface ICountryFlag {
    countryCode: CountryCode;
    flagsStyle?: React.CSSProperties;
    emojiStyle?: React.CSSProperties;
    svg?: boolean;
}
