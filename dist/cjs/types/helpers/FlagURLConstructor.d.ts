declare class FlagURLConstructor {
    private cdnUrl;
    private cdnSuffix;
    constructor(cdnUrl: string, cdnSuffix: string);
    getFlagURL(countryCode: string): string;
}
export default FlagURLConstructor;
