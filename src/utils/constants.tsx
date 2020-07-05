export class Constant {
    static readonly URL_BASE: string = "https://localhost:5001/api/";
    static readonly URL_JWT: string = `${Constant.URL_BASE}Auth/Login?account=1&password=2`;
    static readonly URL_NAV: string = `${Constant.URL_BASE}Summary/GetNavData`;
    static readonly URL_INDEX_LIST:string=`${Constant.URL_BASE}Summary/GetIndexList`
    static readonly URL_TIMELINE:string=`${Constant.URL_BASE}Summary/GetTimeLine`

    static readonly STORAGEKEY_JWT: string = "AUTHJWT";

    static readonly DOMAIN = "";
}