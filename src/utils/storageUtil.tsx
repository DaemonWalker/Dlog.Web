import { Constant } from './constants'

export class StorageUtil {
    static setValue(key: string, value: string) {
        let storage = this.getStorage();
        storage.setItem(key, value);
    }
    static getValue(key: string): string {
        let storage = this.getStorage();
        var value = storage.getItem(key);
        if (value) {
            return value;
        }
        else {
            return "";
        }
    }
    static setJwt(token: string) {
        this.setValue(Constant.STORAGEKEY_JWT, token);
    }
    static getJwt(): string {
        return this.getValue(Constant.STORAGEKEY_JWT);
    }
    private static getStorage(): Storage {
        return window.localStorage;
        // if (!window.localStorage) {
        //     return new CookieStorage();
        // }
        // else {
            
        // }
    }
}