export class Constant {
    static readonly URL_BASE: string = process.env["REACT_APP_API_ADDRESS"] ? process.env["REACT_APP_API_ADDRESS"] : "";
    static readonly URL_API_BASE: string = `${Constant.URL_BASE}api/`;
    static readonly URL_JWT: string = `${Constant.URL_API_BASE}Auth/Login?account=1&password=2`;
    static readonly URL_NAV: string = `${Constant.URL_API_BASE}Summary/GetNavData`;
    static readonly URL_INDEX_LIST: string = `${Constant.URL_API_BASE}Summary/GetIndexList`;
    static readonly URL_TIMELINE: string = `${Constant.URL_API_BASE}Summary/GetTimeLine`;
    static readonly URL_ARTICLE: string = `${Constant.URL_API_BASE}Article/Get`;
    static readonly URL_TAGARTICLES: string = `${Constant.URL_API_BASE}Summary/GetArticlesByTag`;

    static readonly STORAGEKEY_JWT: string = "AUTHJWT";

    static readonly DOMAIN = "";
}