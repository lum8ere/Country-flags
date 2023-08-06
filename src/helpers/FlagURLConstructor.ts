class FlagURLConstructor {
	private cdnUrl: string;
	private cdnSuffix: string;

	constructor(cdnUrl: string, cdnSuffix: string) {
		this.cdnUrl = cdnUrl;
		this.cdnSuffix = cdnSuffix;
	}

	getFlagURL(countryCode: string): string {
		const flagIdentifier = countryCode.toLowerCase();
		return `${this.cdnUrl}${flagIdentifier}.${this.cdnSuffix}`;
	}
}

export default FlagURLConstructor;
