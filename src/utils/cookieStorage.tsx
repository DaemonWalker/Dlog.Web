import { load, save, remove } from 'react-cookies'
import { Constant } from './constants'

export class CookieStorage extends Storage {
    getItem(key: string): any {
        return load(key);
    }

    setItem(key: string, value: string) {
        save(key, value, {
            expires: new Date(9999, 12, 31, 23, 59, 59),
            domain: Constant.DOMAIN
        });
    }
}