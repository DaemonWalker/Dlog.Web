import { ResponseModel } from '../models/responseModel';
import { Constant } from './constants';
import { StorageUtil } from './storageUtil';
export class ApiUtil {
    static Get(url: string, success: (res: ResponseModel) => any, data?: any, error?: (e: any) => any) {
        this.handleResponse(fetch(url,{
            
        }).then(res => res.json()), success, error);
    }
    static Post(url: string, data: any, success: (res: ResponseModel) => any, error?: (e: any) => any) {
        this.handleResponse(fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${StorageUtil.getJwt()}`
            }
        }), success, error);
    }
    static FetchAccessToken(account: string, password: string) {
        this.Post(
            Constant.URL_JWT,
            { account: account, password: password },
            (res: ResponseModel) => {
                StorageUtil.setJwt(res.token);
            });
    }
    
    private static handleResponse(pro: Promise<any>, success: (res: ResponseModel) => any, error?: (e: any) => any) {
        pro.then(
            (res: ResponseModel) => {
                if (res.serverResponse.statusCode == 200) {
                    success(res);
                }
                else if (res.serverResponse.statusCode == 401) {

                }
                else {
                    console.log(`Server responsed an exception.\n\tStatus Code : ${res.serverResponse.statusCode}.\n\tMessage : ${res.serverResponse.message}`);
                }
            },
            e => {
                if (error) {
                    error(e);
                }
                console.error(`Server responsed an fatal error\n${e}`);
            });
    }
}